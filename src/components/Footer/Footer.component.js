import React from 'react'
import './Footer.styles.css';
// import { Link } from 'react-router-dom';

class Footer extends React.Component { 

	scollToTop = () => { 
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

render() { 

	return (
		<div id="footer-copyright">
			<div className="container">
				<span className="left">© 2020 React Js, INC. All Rights Reserved.</span>
				<button onClick={this.scollToTop} className="to-top">Back to top <i className="fa fa-angle-double-up"></i></button>
			</div>
		</div>
	);
}
}

export default Footer;
