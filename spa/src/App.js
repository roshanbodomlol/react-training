import React, { Component } from 'react';

import Header from './components/__elements/Header';
import Footer from './components/__elements/Footer';
import WhatsNew from './components/__screens/WhatsNew';
import WhoWeAre from './components/__screens/WhoWeAre';
import Products from './components/__screens/Products';
import Contact from './components/__screens/Contact';

class App extends Component {
  scrollPage = (refID) => {
    const elementBounds = document.getElementById(refID).getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + elementBounds.top - 69, behavior: 'smooth' });
  }

  render() {
    return (
      <div id="wrapper">
        <Header scrollPage={this.scrollPage}/>
        <WhatsNew/>
        <WhoWeAre/>
        <Products/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
