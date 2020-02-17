import React from 'react';
import './App.css';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';


import { BrowserRouter as Router } from "react-router-dom";
import { RoutePage } from './Route/Route';


class App extends React.Component { 

  render() { 

    return (
      <Router>
        <Header />
        <RoutePage />
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
