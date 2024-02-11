import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Description = ({ movies }) => {
    const params = useParams();
    const movie = movies.find(movie => movie.movieId === parseInt(params.movieId));
  
    return (
      <div>
        <div>{movie.description}</div>
        <iframe src={movie.trailerLink} width="600" height="300" autoplay= "1" />
        <div>
        <Link to="/">Back Home</Link>
        </div>
      </div>
    );
  };

  export default Description
