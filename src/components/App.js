import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

//import Header from './Header';
import SectionsContainer from './SectionsContainer/Hero';

function App() {
  return (
    <Router>
      <SectionsContainer>Lista sekcji</SectionsContainer>
      
    </Router>
  );
}

export default App;
