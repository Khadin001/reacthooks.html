import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerURL, setTrailerURL] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating, trailerURL });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    setTrailerURL('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input value={posterURL} onChange={e => setPosterURL(e.target.value)} placeholder="Poster URL" required />
      <input value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating" required />
      <input value={trailerURL} onChange={e => setTrailerURL(e.target.value)} placeholder="Trailer URL" required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
