import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Header from './Header';

function App() {
  return (
    <Router>
      <Header>Moja Aplikacja</Header>
      
    </Router>
  );
}

export default App;
