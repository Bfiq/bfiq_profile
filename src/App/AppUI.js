import './App.css';
import React from 'react';
import {Header} from '../components/Header';
import {AboutMe} from '../components/AboutMe';
import {Knowledge} from '../components/Knowledge';
import {Projects} from '../components/Projects';

function AppUI() {
  return (
    <React.Fragment>
      <Header/>
      <AboutMe id="aboutme"/>
      <Knowledge id="knowledge"/>
      <Projects id="projects"/>
    </React.Fragment>
  );
}

export {AppUI};