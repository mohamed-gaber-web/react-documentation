import React from 'react';
import './App.css';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import HomePage from './pages/homePage/home.page';
import AboutPage from './pages/Aboutus/About.page';
import ContactPage from './pages/Contactus/Contact.page';
import ServicesPage from './pages/Services/Service.page';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component { 


  render() { 

    return (
      <Router>
        <Header />
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/contact" component={ContactPage} />
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
