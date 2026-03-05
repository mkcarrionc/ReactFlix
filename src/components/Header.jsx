import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1>
            React<span>Flix</span>
          </h1>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                to="/"
                className={`header__nav-link ${location.pathname === "/" ? "header__nav-link--active" : ""}`}
              >
                Inicio
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/peliculas"
                className={`header__nav-link ${location.pathname === "/peliculas" ? "header__nav-link--active" : ""}`}
              >
                Películas
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/gestion-alquileres"
                className={`header__nav-link ${location.pathname === "/gestion-alquileres" ? "header__nav-link--active" : ""}`}
              >
                Mis Alquileres
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/gestion-compras"
                className={`header__nav-link ${location.pathname === "/gestion-compras" ? "header__nav-link--active" : ""}`}
              >
                Mis Compras
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__user">
          <span className="header__user-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#e50914"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </span>
          <span className="header__user-name">Usuario</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
