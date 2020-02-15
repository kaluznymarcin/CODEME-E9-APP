import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
 import './App.css'; 

import Header from './Header';
import Nav from './Nav';
import HomePage from './HomePage';

import Importer from './Importer'

function App() {
  return (
    <Header>Moja Aplikacja</Header>
    
       <Nav />
      <Importer />
  );
}

export default App;
