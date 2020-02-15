import React from 'react';

import {withRouter, Link} from "react-router-dom";

import './Header.scss';
import logo from './images/Unsplash_wordmark_logo.svg'

class Header extends React.Component {
    state = {
        userName: this.props.match.params.slug,
        apiData: null,
    };


    componentDidMount() {

    }


    render() {


        return (
            <header className="header">
                <Link to='/' className='header__logo'>
                <img src={logo} alt="" />
                </Link>
            </header>
        )
    }
}


export default withRouter(Header);