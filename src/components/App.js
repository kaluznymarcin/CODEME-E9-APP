import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import SectionsContainer from './SectionsContainer/Hero';
import SectionView from './SectionView';

//import Header from './Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SectionsView/:id">
          <SectionView />
        </Route>
        <Route path="/">
          <SectionsContainer>Lista sekcji</SectionsContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
