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
import Currency from './Currency';

function App() {
  return (
    <Router>
      <Header>Moja Aplikacja</Header>
      <Nav />

      <Switch>
        <Route path="/waluty">
          <Currency />
        </Route>
        {/* <Route path="/" component={HomePage} /> */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
