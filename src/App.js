import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' }); // Réinitialiser le formulaire
  };

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter ? movie.rating >= ratingFilter : true;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="app">
      <h1>Mon Application de Cinéma</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="URL du poster"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Note"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          required
        />
        <button type="submit">Ajouter un film</button>
      </form>
      
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
