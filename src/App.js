import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Collection from './components/Collection'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          {/* Route parameter: */}
          <Route path='/:collection_id' component={Collection} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;