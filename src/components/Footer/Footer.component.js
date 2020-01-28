import React from 'react'
import './Footer.styles.css';

function Footer() { 
    return (
        <div id="footer-copyright">
			<div className="container">
				<span className="left">© 2020 React Js, INC. All Rights Reserved.</span>
				<a href="#" className="to-top">Back to top <i className="fa fa-angle-double-up"></i></a>
			</div>
		</div>
    );
}

export default Footer;
