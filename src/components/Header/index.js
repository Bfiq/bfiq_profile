import './Header.css';
import React from 'react';
import {NavigationBar} from '../Navbar/NavigationBar';

function Header() {
  return (
    <React.Fragment>
      <header>
        <NavigationBar/>
        <p>Hola, soy Brian Fiquitiva, desarrollador web</p>
      </header>
    </React.Fragment>
  );
}

export {Header};