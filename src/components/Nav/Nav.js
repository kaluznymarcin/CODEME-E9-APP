import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default () => (
  <nav>
    <ul className="navi">
      <li><Link to="/">Strona główna</Link></li>
      <li><Link to="/waluty">Waluty z dzisiaj</Link></li>
      <li>Waluty 5 ostatnich dni</li>
      <li>Zloto dzisiaj</li>
      <li>Zloto 5 ostatnich dni</li>
    </ul>
  </nav>
);
