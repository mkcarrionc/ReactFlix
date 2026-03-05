import React, { useState, useEffect } from 'react';
import PeliculaGrid from '../components/PeliculaGrid';
import { mockPeliculas } from '../data/mockPeliculas';

const HomePage = () => {
  const [featuredPeliculas, setFeaturedPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setFeaturedPeliculas(mockPeliculas.slice(0, 4));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="principal-page">
      <section className="principal-page__hero">
        <div className="principal-page__hero-content">
          <h1 className="principal-page__title">Bienvenido a ReactFlix</h1>
          <p className="principal-page__subtitle">
            Descubre las mejores películas y alquila o compra tus favoritas
          </p>
        </div>
      </section>

      <section className="principal-page__featured">
        <h2 className="principal-page__section-title">Películas Destacadas</h2>
        <PeliculaGrid peliculas={featuredPeliculas} loading={loading} />
      </section>
    </div>
  );
};

export default HomePage;