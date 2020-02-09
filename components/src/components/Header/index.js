import React, { Component } from 'react';

import logo from '../../assets/img/logo.png';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div id="header-wrapper">
        <img src={logo} alt=""/>
      </div>
    );
  }
}

export default Header;
