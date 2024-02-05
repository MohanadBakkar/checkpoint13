import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <img src={movie.posterURL} alt={movie.title} width={400} height= {300} />
      </div>
    </div>
  );
};

export default MovieCard;