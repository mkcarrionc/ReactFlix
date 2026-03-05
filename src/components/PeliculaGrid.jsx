import React from 'react';
import PeliculaCard from './PeliculaCard';
import LoadingSpinner from './LoadingSpinner';

const PeliculaGrid = ({ peliculas, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!peliculas || peliculas.length === 0) {
    return (
      <div className="pelicula-grid__empty">
        <p className="pelicula-grid__empty-text">No se encontraron películas</p>
      </div>
    );
  }

  return (
    <div className="pelicula-grid">
      {peliculas.map(pelicula => (
        <PeliculaCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default PeliculaGrid;