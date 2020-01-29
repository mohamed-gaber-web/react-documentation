import React, { Component } from 'react';
import './Header.styles.css';

import { Link } from 'react-router-dom';

class Header extends Component { 

    render() { 
        return (
            <header>
                <div className="container">
                    <div className="parent">
                    <div className="navbar">
                        <ul>
                            <li> <Link to="/"> Home </Link> </li>
                            <li> <Link to="/about"> About Us </Link> </li>
                            <li> <Link to="/services"> Services </Link> </li>
                            <li> <Link to="/contact"> Contact Us </Link> </li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;