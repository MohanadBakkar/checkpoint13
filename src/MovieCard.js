import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const MovieCard = ({ movieId, title, description, posterURL, rating, trailerLink }) => {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        <img src={posterURL} alt={title} />
        <div>
          <Link to={"/description/" + movieId}>Go to trailer</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;