import React, { useState, useEffect } from 'react';
import PeliculaGrid from '../components/PeliculaGrid';

const MyComprasPage = () => {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCompras = JSON.parse(localStorage.getItem('compras') || '[]');
    setCompras(savedCompras);
    setLoading(false);
  }, []);

  return (
    <div className="gestion-compras-page">
      <h1 className="gestion-compras-page__title">Mis Compras</h1>
      
      {compras.length === 0 ? (
        <div className="gestion-compras-page__empty">
          <p>No tienes películas compradas</p>
        </div>
      ) : (
        <PeliculaGrid peliculas={compras} loading={loading} />
      )}
    </div>
  );
};

export default MyComprasPage;