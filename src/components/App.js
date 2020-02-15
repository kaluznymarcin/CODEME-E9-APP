import React from 'react';
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
        <Route path="/photo/:id"><> Photo </></Route>
        <Route path="/section/:id"><> Section </></Route>
        <Route path="/">
          <Sections />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
