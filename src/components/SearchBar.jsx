import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Buscar películas por título, director o actor..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <span className="search-bar__icon">🔍</span>
    </div>
  );
};

export default SearchBar;