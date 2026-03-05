import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__circle"></div>
      <p className="loading-spinner__text">Cargando...</p>
    </div>
  );
};

export default LoadingSpinner;