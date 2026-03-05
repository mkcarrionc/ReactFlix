import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrailerModal from './TrailerModal';

const PeliculaCard = ({ pelicula }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <article className="pelicula-card">
        <div className="pelicula-card__image-container">
          <img 
            src={imageError ? 'https://via.placeholder.com/300x450?text=No+Image' : pelicula.image} 
            alt={pelicula.title}
            className="pelicula-card__image"
            onError={handleImageError}
          />
          <div className="pelicula-card__overlay">
            <button 
              className="pelicula-card__trailer-btn"
              onClick={() => setShowTrailer(true)}
            >
              ▶ Ver Tráiler
            </button>
          </div>
        </div>
        
        <div className="pelicula-card__content">
          <h3 className="pelicula-card__title">{pelicula.title}</h3>
          <p className="pelicula-card__meta">{pelicula.year} • {pelicula.duration} min</p>
          <p className="pelicula-card__rating">⭐ {pelicula.rating}/10</p>
          
          <div className="pelicula-card__actions">
            <Link to={`/pelicula/${pelicula.id}`} className="pelicula-card__details-btn">
              Ver detalles
            </Link>
          </div>
        </div>
      </article>

      {showTrailer && (
        <TrailerModal 
          pelicula={pelicula} 
          onClose={() => setShowTrailer(false)} 
        />
      )}
    </>
  );
};

export default PeliculaCard;