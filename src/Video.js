import React from 'react'

/*const Video = ({link}) => {
  return (
    <div>
      <iframe src={link} width="600" height="300" autoplay= "1" />
    </div>
  )
}

export default Video*/


const Description = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));
  
    return (
      <div className="description">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <div>
          <Link to={movie.descriptionLink} target="_blank" rel="noopener noreferrer">Description</Link>
          <Link to={movie.trailerLink} target="_blank" rel="noopener noreferrer">Trailer</Link>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  };
