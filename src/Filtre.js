import React from 'react';

const Filtre = ({ filterText, setFilterText, minRating, setMinRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        value={minRating}
        onChange={e => setMinRating(e.target.value)}
      />
    </div>
  );
};

export default Filtre;
