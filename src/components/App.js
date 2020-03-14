import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Drawer from './Drawer';
import Header from './Header';

import Sections from './Sections';
import Section from './Section';
import Photo from './Photo';

function App() {
  return (
    <Router>
      <Drawer open={true} onClose={() => {}} />
      <Header />
      <div style={{marginTop: '85px'}}>
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
      </div>
    </Router>
  );
}

export default App;
