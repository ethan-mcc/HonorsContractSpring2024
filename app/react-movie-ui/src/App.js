import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data from /api/items
    fetch('/api/items')
        .then(response => response.json())
        .then(data => {
          setMovies(data); // Set fetched movies to state
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, []);

  return (
      <div className="container mx-auto mt-5">
        <h1 className="text-3xl font-bold mb-5">Movie Recommendations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movies.map(movie => (
              <div key={movie.id} className="border border-gray-300 p-4 rounded-md">
                <img src={movie.poster} alt={movie.title} className="w-full h-auto mb-3 rounded-md" />
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p className="text-sm text-gray-600">{movie.description}</p>
                <p className="text-sm mt-2">Genre: {movie.genre}</p>
                <p className="text-sm">Year: {movie.year}</p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default App;
