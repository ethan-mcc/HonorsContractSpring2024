import fs from 'fs';
import { parse } from 'csv-parse';
import { Movie } from './models/movie.js';
import { database } from './database.js';
import pLimit from 'p-limit';

const limit = pLimit(10);

async function loadDataset() {
    const parser = fs.createReadStream('../dataset.csv').pipe(
        parse({
            columns: [
                "id", "title", "vote_average", "vote_count", "status", "release_date",
                "revenue", "runtime", "adult", "backdrop_path", "budget", "homepage",
                "imdb_id", "original_language", "original_title", "overview", "popularity",
                "poster_path", "tagline", "genres", "production_companies", "production_countries",
                "spoken_languages"
            ],
            cast: true,
        })
    );


    const movies = [];
    for await (const record of parser) {
        movies.push({
            id: record.id,
            title: record.title,
            // ... other fields
            adult: record.adult === 'true',
            backdrop_path: record.backdrop_path
        });
        if (movies.length >= 1000) { // Batch size can be adjusted based on your needs
            await insertMoviesBatch(movies.splice(0, 1000));
        }
    }

    if (movies.length) {
        await insertMoviesBatch(movies);
    }

    console.log('Data loading complete');
}

async function insertMoviesBatch(movies) {
    try {
        await Movie.insertMany(movies, { ordered: false });
    } catch (error) {
        console.error('Error inserting batch:', error);
    }
}

database.connect().then(() => loadDataset());