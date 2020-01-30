import React from 'react'
import './Footer.styles.css';

import { Link } from 'react-router-dom';

function Footer() { 
    return (
        <div id="footer-copyright">
			<div className="container">
				<span className="left">© 2020 React Js, INC. All Rights Reserved.</span>
				<Link to="#" className="to-top">Back to top <i className="fa fa-angle-double-up"></i></Link>
			</div>
		</div>
    );
}

export default Footer;
