import React, { PureComponent  } from 'react';
import './Header.styles.css';

import { Link, withRouter } from 'react-router-dom';

class Header extends PureComponent  { 

    state = {
        name: "mohamed",
        isLogin: true
    }

    // name = "ahmed"; error in react bad use
    
    goToExternalPage = (link) => { 
        // const { location } = this.props;
        // console.log(location);
        // history.go("https://stackoverflow.com/questions/42914666/react-router-external-link");
        window.location.href = link;
    }

    updatedLoggedIn = () => { 
        // this.state.isLogin = "true"; // this is bad
        this.setState({isLogin: !this.state.isLogin})
    }
    render() { 
        const {isLoggedin, name} = this.state;

        return (
            <header>
                <div className="container">
                    <div className="parent">
                    <div className="navbar">
                        <ul>
                            <li> <Link to="/"> Home </Link> </li>
                            <li> <Link to="/about"> About Us </Link> </li>
                            <li> <Link to="/services"> Services </Link> </li>
                            <li> <Link to="/faq"> faq </Link> </li>
                            <li> <Link to="/contact"> Contact Us </Link> </li>
                            <li>
                                <Link to="/contact"> Username:
                                    {this.state.isLogin ? name : "Not Login"}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul>
                            <li><button onClick={() => { this.goToExternalPage("https://www.facebook.com/mohamed.jaber.963871")}}><i className="fa fa-facebook" aria-hidden="true"></i></button></li>
                            <li><button onClick={() => { this.goToExternalPage("https://github.com/mohamed-gaber-web")}}><i className="fa fa-github" aria-hidden="true"></i></button></li>
                            <li><button onClick={() => { this.goToExternalPage("https://www.linkedin.com/in/mohamed-jaber-69208510b/")}}><i className="fa fa-linkedin" aria-hidden="true"></i></button></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);