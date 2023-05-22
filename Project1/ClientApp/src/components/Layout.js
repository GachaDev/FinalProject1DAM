import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default function Layout(props) {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/FAQ', label: 'Preguntas' },
    { link: '/clasificacion', label: 'Clasificación'},
    { link: '/Player12&13', label: 'Jugador 12 y 13' }
  ];

  return (
    <div>
      <NavMenu links={links} />
      {props.children}
    </div>
  );
}
