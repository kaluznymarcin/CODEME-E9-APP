import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { M } from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <nav className="nav-wrapper blue darken-3">
                    <div className="container nav-wrapper">
                        <Link to="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                        <Link to="/" className="brand-logo">GRUPA_3</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </nav>
    
                <ul id="slide-out" className="sidenav">
                    <li><Link to="/"><i className="material-icons">cloud</i>Back Home ...</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><div className="divider"></div></li>
                    <li><Link to="#!" className="subheader">You may want to jump to Unsplash ...</Link></li>
                    <li><a href="https://unsplash.com/" target="_blank" className="waves-effect">Unsplash.com</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar