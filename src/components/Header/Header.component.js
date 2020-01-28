import React, { Component } from 'react';
import './Header.styles.css';

class Header extends Component { 

    render() { 
        return (
            <header>
                <div className="container">
                    <div className="parent">
                    <div className="navbar">
                        <ul>
                            <li> <a href=""> Home </a> </li>
                            <li> <a href=""> About Us </a> </li>
                            <li> <a href=""> Services </a> </li>
                            <li> <a href=""> Contact Us </a> </li>
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