import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    vote_average: { type: Number, required: true },
    vote_count: { type: Number, required: true },
    status: { type: String, required: true },
    release_date: { type: String, required: true },
    revenue: { type: Number, required: true },
    runtime: { type: Number, required: true },
    adult: { type: Boolean },
    backdrop_path: { type: String },
    budget: { type: Number },
    homepage: { type: String },
    imdb_id: { type: String },
    original_language: { type: String },
    original_title: { type: String },
    overview: { type: String },
    popularity: { type: Number },
    poster_path: { type: String },
    tagline: { type: String },
    genres: [String],
    production_companies: [String],
    production_countries: [String],
    spoken_languages: [String],
});

export const Movie = mongoose.model('Movie', movieSchema);