import React, { useState } from 'react';

const PurchaseButton = ({ pelicula, onPurchase }) => {
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handlePurchase = () => {
    setIsPurchasing(true);
    
    // Simular proceso de compra
    setTimeout(() => {
      onPurchase(pelicula);
      setIsPurchasing(false);
      alert(`¡Has comprado ${pelicula.title} por ${pelicula.price}€!`);
    }, 500);
  };

  return (
    <button 
      className="compra-button"
      onClick={handlePurchase}
      disabled={isPurchasing}
    >
      {isPurchasing ? 'Procesando...' : `Comprar por ${pelicula.price}€`}
    </button>
  );
};

export default PurchaseButton;