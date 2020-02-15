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
import SingleImage from "./SingleImage";
//import "./App.css";
import "./APP.scss";
import Header from "./Header";

function App() {

    return (
        <Router>
            <Header/>
            <Switch>

                <Route path="/collection/image/:slug" exact component={SingleImage}/>
                <Route path="/collection/:slug" exact component={Collection}/>
                <Route path="/" component={HomePage}/>

            </Switch>
        </Router>
    );

}

export default App;
