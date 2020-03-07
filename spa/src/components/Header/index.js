import React from 'react';
import { Row, Col } from 'antd';

import logo from '../../static/icons/logo.svg';
import './Header.scss';

const Header = () => (
  <div id="header-wrapper">
    <div className="container">
      <Row>
        <Col span={4}>
          <div id="logo">
            <img src={logo} alt=""/>
          </div>
        </Col>
        <Col span={20}>
          <ul id="menu">
            <li><a href="/">What&rsquo;s New</a></li>
            <li><a href="/">Overview</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </Col>
      </Row>
    </div>
  </div>
);

export default Header;
