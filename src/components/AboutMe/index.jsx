import React from 'react';
import './AboutMe.css';

function AboutMe(props) {
  return (
    <section id={props.id} className="aboutme">
        <p>Sobre Mí</p>
    </section>
  );
}

export {AboutMe};