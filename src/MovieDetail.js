import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const history = useNavigate();
  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe src={movie.trailerURL} title="Trailer" allowFullScreen></iframe>
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetail;
