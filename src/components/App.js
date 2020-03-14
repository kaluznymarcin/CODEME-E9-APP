import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Header from './Header';

import Sections from './Sections';
import Section from './Section';
import Photo from './Photo';

function App() {
  return (
    <>
    <Header />
    <div style={{marginTop: '85px'}}>
      <Router>
        <Switch>
          <Route path="/photo/:id">
            <Photo />
          </Route>
          <Route path="/section/:id">
            <Section />
          </Route>
          <Route path="/">
            <Sections />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
