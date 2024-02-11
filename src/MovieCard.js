import React from 'react';
import Video from './Video';

const MovieCard = ({ title, description, posterURL, rating, trailerLink }) => {
  return (
    <div className="movie-card">
      
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        <img src={posterURL} alt={title} />
        <Video link={trailerLink} />
      </div>
    </div>
  );
};

export default MovieCard;