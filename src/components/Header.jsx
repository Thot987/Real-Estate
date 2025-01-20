import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Encuentra tu hogar</h1>
      <nav>
        <Link to="/">Página Principal</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/reservations">Reservaciones</Link>
      </nav>
    </header>
  );
}

export default Header;