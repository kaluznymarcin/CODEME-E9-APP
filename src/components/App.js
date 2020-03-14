import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import SectionsContainer from './SectionsContainer/Hero';
import SectionView from './SectionView';

//import Header from './Header';

function App() {
  return (
    <Router>
    <Header name='G2 Galleries'></Header>
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
