import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default function Layout(props) {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/FAQ', label: 'Preguntas' },
    { link: '/contact', label: 'Contact' },
  ];

  return (
    <div>
      <NavMenu links={links} />
      {props.children}
    </div>
  );
}
