import React, { PureComponent  } from 'react';
import './Header.styles.css';

import { Link, withRouter } from 'react-router-dom';

class Header extends PureComponent  { 

    // name = "ahmed"; error in react bad use
    
    newFunction = () => { 
        const history = this.props;
        // e.preventDefault();
        console.log(history);
    }
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
                            <li><Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                            <li><Link to=""><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                        </ul>
                        </div>
                        <button onClick={this.newFunction}> Click </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);