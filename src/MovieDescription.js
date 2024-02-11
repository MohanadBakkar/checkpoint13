import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies  }) => {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe src={movie.trailerLink} title="Movie Trailer" />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;