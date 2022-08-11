import './Header.css';
import React from 'react';
import {NavigationBar} from '../Navbar/NavigationBar';

function Header() {
  return (
    <React.Fragment>
      <header id='top'>
        <NavigationBar/>
        <h3>Hola, soy Brian Fiquitiva,<br/>
           desarrollador web</h3>
      </header>
    </React.Fragment>
  );
}

export {Header};