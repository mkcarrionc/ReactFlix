import React from 'react';
import PeliculaGrid from '../components/PeliculaGrid';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import usePeliculaSearch from '../hooks/usePeliculaSearch';

const PeliculasPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredPeliculas,
    loading,
    categories
  } = usePeliculaSearch();

  return (
    <div className="peliculas-page">
      <h1 className="peliculas-page__title">Catálogo de Películas</h1>
      
      <div className="peliculas-page__filters">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <p className="peliculas-page__results">
        {filteredPeliculas.length} películas encontradas
      </p>

      <PeliculaGrid peliculas={filteredPeliculas} loading={loading} />
    </div>
  );
};

export default PeliculasPage;