import React, { useState, useEffect } from 'react';
import PeliculaGrid from '../components/PeliculaGrid';

const MyAlquileresPage = () => {
  const [alquileres, setAlquileres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAlquileres = JSON.parse(localStorage.getItem('alquileres') || '[]');
    setAlquileres(savedAlquileres);
    setLoading(false);
  }, []);

  const handleExtendRental = (peliculaId) => {
    const updatedAlquileres = alquileres.map(alquiler => {
      if (alquiler.id === peliculaId) {
        alert(`Plazo de alquiler extendido por 48 horas adicionales para ${alquiler.title}`);
        return { ...alquiler, extended: true };
      }
      return alquiler;
    });
    setAlquileres(updatedAlquileres);
    localStorage.setItem('alquileres', JSON.stringify(updatedAlquileres));
  };

  return (
    <div className="gestion-alquileres-page">
      <h1 className="gestion-alquileres-page__title">Mis Alquileres</h1>
      
      {alquileres.length === 0 ? (
        <div className="gestion-alquileres-page__empty">
          <p>No tienes películas alquiladas</p>
        </div>
      ) : (
        <>
          <PeliculaGrid peliculas={alquileres} loading={loading} />
          <div className="gestion-alquileres-page__actions">
            {alquileres.map(alquiler => (
              <button
                key={alquiler.id}
                className="gestion-alquileres-page__extend-btn"
                onClick={() => handleExtendRental(alquiler.id)}
              >
                Extender alquiler de {alquiler.title}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyAlquileresPage;