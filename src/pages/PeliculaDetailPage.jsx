import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RentalButton from '../components/AlquilerButton';
import PurchaseButton from '../components/CompraButton';
import TrailerModal from '../components/TrailerModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { mockPeliculas } from '../data/mockPeliculas';

const PeliculaDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [alquileres, setAlquileres] = useState([]);
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundPelicula = mockPeliculas.find(m => m.id === parseInt(id));
      if (foundPelicula) {
        setPelicula(foundPelicula);
      }
      setLoading(false);
    }, 500);

    // Cargar datos del localStorage
    const savedAlquileres = JSON.parse(localStorage.getItem('alquileres') || '[]');
    const savedCompras = JSON.parse(localStorage.getItem('compras') || '[]');
    setAlquileres(savedAlquileres);
    setCompras(savedCompras);

    return () => clearTimeout(timer);
  }, [id]);

  const handleRent = (rentedPelicula) => {
    const newAlquileres = [...alquileres, { ...rentedPelicula, alquilerDate: new Date().toISOString() }];
    setAlquileres(newAlquileres);
    localStorage.setItem('alquileres', JSON.stringify(newAlquileres));
  };

  const handlePurchase = (compradPelicula) => {
    const newCompras = [...compras, { ...compradPelicula, compraDate: new Date().toISOString() }];
    setCompras(newCompras);
    localStorage.setItem('compras', JSON.stringify(newCompras));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!pelicula) {
    return (
      <div className="pelicula-detail__not-found">
        <h2>Película no encontrada</h2>
        <button onClick={() => navigate('/peliculas')} className="pelicula-detail__back-btn">
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="pelicula-detail">
      <div className="pelicula-detail__container">
        <div className="pelicula-detail__image-container">
          <img 
            src={pelicula.image} 
            alt={pelicula.title}
            className="pelicula-detail__image"
          />
        </div>

        <div className="pelicula-detail__info">
          <h1 className="pelicula-detail__title">{pelicula.title}</h1>
          
          <div className="pelicula-detail__meta">
            <span className="pelicula-detail__year">{pelicula.year}</span>
            <span className="pelicula-detail__genre">{pelicula.genre}</span>
            <span className="pelicula-detail__duration">{pelicula.duration} min</span>
            <span className="pelicula-detail__rating">⭐ {pelicula.rating}/10</span>
          </div>

          <div className="pelicula-detail__director">
            <strong>Director:</strong> {pelicula.director}
          </div>

          <div className="pelicula-detail__cast">
            <strong>Reparto:</strong> {pelicula.cast.join(', ')}
          </div>

          <div className="pelicula-detail__language">
            <strong>Idioma:</strong> {pelicula.language}
          </div>

          <div className="pelicula-detail__synopsis">
            <h3>Sinopsis</h3>
            <p>{pelicula.synopsis}</p>
          </div>

          <div className="pelicula-detail__actions">
            <button 
              className="pelicula-detail__trailer-btn"
              onClick={() => setShowTrailer(true)}
            >
              Ver Tráiler
            </button>
            <RentalButton pelicula={pelicula} onRent={handleRent} />
            <PurchaseButton pelicula={pelicula} onPurchase={handlePurchase} />
          </div>
        </div>
      </div>

      {showTrailer && (
        <TrailerModal 
          pelicula={pelicula} 
          onClose={() => setShowTrailer(false)} 
        />
      )}
    </div>
  );
};

export default PeliculaDetailPage;