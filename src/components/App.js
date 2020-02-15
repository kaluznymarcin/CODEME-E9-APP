import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
// import Header from './Header';
// import Nav from './Nav';
// import Collection from './Collection';
import HomePage from './HomePage';
import Collection from "./Collection";

function App() {

  return (
      <Router>
      <Switch>
          <Route path="/collection/:slug" component={Collection}>
              <Collection />
          </Route>
          <Route path="/">
              <HomePage />
          </Route>


      </Switch>
      </Router>
  );

}

export default App;
