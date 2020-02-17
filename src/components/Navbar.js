import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">GRUPA_3 - App</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar