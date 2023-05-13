import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    const links = [
      { link: '/', label: 'Home' },
      { link: '/about', label: 'About' },
      { link: '/contact', label: 'Contact' },
    ];

    return (
      <div>
        <NavMenu links={links} />
        {this.props.children}
      </div>
    );
  }
}
