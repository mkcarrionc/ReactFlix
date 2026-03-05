import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">ReactFlix</h3>
          <p className="footer__text">Tu plataforma de streaming favorita</p>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__subtitle">Enlaces rápidos</h4>
          <ul className="footer__list">
            <li className="footer__item">Términos y condiciones</li>
            <li className="footer__item">Política de privacidad</li>
            <li className="footer__item">Ayuda</li>
          </ul>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__subtitle">Contacto</h4>
          <ul className="footer__list">
            <li className="footer__item">Email: info@streamflix.com</li>
            <li className="footer__item">Tel: +34 123 456 789</li>
          </ul>
        </div>
        
        <div className="footer__section">
          <p className="footer__copyright">
            &copy; 2024 ReactFlix. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;