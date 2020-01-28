import React from 'react';
import './App.css';

import HomePage from './pages/homePage/home.page';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';


class App extends React.Component { 


  render() { 

    return (
      <div className="app">
        <Header />
        <HomePage />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
