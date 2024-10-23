import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filtre from './Filtre';
import AddMovieForm from './AddMovieForm';
import MovieDetail from './MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [minRating, setMinRating] = useState(0);

  const addMovie = movie => {
    setMovies([...movies, { ...movie, id: Date.now().toString() }]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterText.toLowerCase()) && movie.rating >= minRating
  );

  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <AddMovieForm addMovie={addMovie} />
        <Filtre filterText={filterText} setFilterText={setFilterText} minRating={minRating} setMinRating={setMinRating} />
        <MovieList movies={filteredMovies} />
        <Routes>
          <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
