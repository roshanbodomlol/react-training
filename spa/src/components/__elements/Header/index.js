import React, { Component } from 'react';
import { Row, Col, Badge, Tooltip } from 'antd';
import { debounce } from 'lodash';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { GLOBALS } from '../../../constants';
import logo from '../../../static/icons/logo.svg';
import './Header.scss';

class Header extends Component {
  state = {
    headerMode: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleHeaderScroll, 30));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.handleHeaderScroll, 30));
  }

  handleHeaderScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
      this.setState({ headerMode: 1 });

      if (scrollTop > GLOBALS.HEADER_SCROLL_THRESHOLD) {
        this.setState({ headerMode: 2 });
      } else {
        this.setState({ headerMode: 1 });
      }
    } else {
      this.setState({ headerMode: 0 });
    }
  }

  handleMenuClick = (e, refID) => {
    e.preventDefault();
    const { scrollPage } = this.props;
    scrollPage(refID);
  };

  render() {
    const { headerMode } = this.state;
    const headerClasses = classnames('headerWrapper', {
      sticky: headerMode === 1 || headerMode === 2,
      stickyTop: headerMode === 2
    });

    return (
      <div id="header-wrapper" className={headerClasses}>
        <div className="container">
          <Row>
            <Col span={4}>
              <div id="logo">
                <img src={logo} alt=""/>
              </div>
            </Col>
            <Col span={20}>
              <div className="header-right">
                <ul id="menu">
                  <li><a href="/" onClick={(e) => this.handleMenuClick(e, 'whats-new')}>What&rsquo;s New</a></li>
                  <li><a href="/" onClick={(e) => this.handleMenuClick(e, 'who-we-are')}>Who we are</a></li>
                  <li><a href="/" onClick={(e) => this.handleMenuClick(e, 'products')}>Products</a></li>
                  <li><a href="/" onClick={(e) => this.handleMenuClick(e, 'contact')}>Contact</a></li>
                </ul>
                <div className="cart">
                  <Tooltip
                    title="You have 1 items in your cart"
                    placement="bottom"
                    overlayClassName="cart-tooltip"
                  >
                    <Badge count={1}>
                      <ShoppingCartOutlined/>
                    </Badge>
                  </Tooltip>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  scrollPage: PropTypes.func.isRequired
};

export default Header;
