import React from 'react';
import {
  bool,
  arrayOf,
  objectOf,
  any,
  func,
  number
} from 'prop-types';
import { Row, Col } from 'antd';
import classnames from 'classnames';

import Loading from '../../Loading';
import withProducts from './withProducts';
import { WP } from '../../../constants';
import './Products.scss';

const Products = ({
  products, loading, setCategory, activeCategory
}) => {
  const catList = WP.PRODUCT_CATEGORIES.map((cat) => {
    const classes = classnames('category-span', {
      active: activeCategory === cat.id
    });
    return (
      <span
        key={`cat-${cat.id}`}
        role="button"
        onClick={() => setCategory(cat.id)}
        tabIndex="-1"
        className={classes}
      >
        {cat.name}
      </span>
    );
  });

  const productList = products.map((product) => (
    <Col span={6} key={`product-${product.id}`}>
      <div className="product">
        <div className="product-image">
          <img src={product.img} alt=""/>
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">Rs. {product.price}</div>
      </div>
    </Col>
  ));

  return (
    <div id="products" className="screen __fullHeight">
      <div className="cat-bar">
        {catList}
        <span
          role="button"
          onClick={() => console.log()}
          tabIndex="-1"
        >
          All
        </span>
      </div>
      <div className="product-list">
        {
          loading
            ? <Loading/>
            : (
              <Row type="flex">
                {productList}
              </Row>
            )
        }
      </div>
    </div>
  );
};

Products.propTypes = {
  products: arrayOf(objectOf(any)).isRequired,
  loading: bool.isRequired,
  setCategory: func.isRequired,
  activeCategory: number.isRequired
};

export default withProducts(Products);
