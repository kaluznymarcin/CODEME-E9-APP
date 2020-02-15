import React from 'react';
import './Hero.css';
import Content from './Content';

export default (props) => (
  <section className="hero">
    <h1 className="listsTitle">{props.children}</h1>
    <Content />
  </section>
);