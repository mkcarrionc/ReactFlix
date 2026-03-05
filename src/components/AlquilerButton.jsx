import React, { useState } from 'react';

const RentalButton = ({ pelicula, onRent }) => {
  const [isRenting, setIsRenting] = useState(false);

  const handleRent = () => {
    setIsRenting(true);
    
    // Simular proceso de alquiler
    setTimeout(() => {
      onRent(pelicula);
      setIsRenting(false);
      alert(`Has alquilado ${pelicula.title} por ${pelicula.alquilerPrecio}€ por 48 horas`);
    }, 500);
  };

  return (
    <button 
      className="alquiler-button"
      onClick={handleRent}
      disabled={isRenting}
    >
      {isRenting ? 'Procesando...' : `Alquilar por ${pelicula.alquilerPrecio}€`}
    </button>
  );
};

export default RentalButton;