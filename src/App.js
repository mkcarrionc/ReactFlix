import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipalPage from './pages/PrincipalPage';
import PeliculasPage from './pages/PeliculasPage';
import PeliculaDetailPage from './pages/PeliculaDetailPage';
import AlquileresPage from './pages/AlquileresPage';
import ComprasPage from './pages/ComprasPage';
import './styles/App.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<PrincipalPage />} />
            <Route path="/peliculas" element={<PeliculasPage />} />
            <Route path="/pelicula/:id" element={<PeliculaDetailPage />} />
            <Route path="/gestion-alquileres" element={<AlquileresPage />} />
            <Route path="/gestion-compras" element={<ComprasPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;