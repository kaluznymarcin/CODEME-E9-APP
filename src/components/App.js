import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Sections from './Sections'

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/">
          <Sections />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
