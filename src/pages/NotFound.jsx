import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#c0392b' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la ruta que estás buscando no existe.</p>
      <Link to="/" style={{ color: '#2980b9', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </div>
  );
}
