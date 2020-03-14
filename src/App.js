import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Collection from './components/Collection'
import Image from './components/Image'
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            {/* Route parameter: */}
            <Route path='/collection/:collection_id' component={Collection} />
            <Route path='/image/:image_id' component={Image} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;