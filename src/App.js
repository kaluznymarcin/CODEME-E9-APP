import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Collection from './components/Collection'
import Image from './components/Image'
import 'materialize-css/dist/css/materialize.min.css';
import * as unsplashConsts from './constants'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';

axios.defaults.baseURL = unsplashConsts.UNSPLASH_BASE_URL
axios.defaults.headers.common['Authorization'] = unsplashConsts.UNSPLASH_AUTHORIZATION;

class App extends Component {

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default App;