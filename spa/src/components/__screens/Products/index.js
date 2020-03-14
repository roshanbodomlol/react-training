import React from 'react';
import {
  bool,
  arrayOf,
  objectOf,
  any,
  func,
  number,
  oneOfType,
  string
} from 'prop-types';
import { Row } from 'antd';
import classnames from 'classnames';

import Loading from '../../Loading';
import withProducts from './withProducts';
import { WP } from '../../../constants';
import Product from './Product';
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
    <Product key={`product-${product.id}`} product={product}/>
  ));

  const classes = classnames('category-span', {
    active: activeCategory === 'all'
  });

  return (
    <div id="products" className="screen __fullHeight">
      <div className="cat-bar">
        {catList}
        <span
          role="button"
          onClick={() => setCategory('all')}
          tabIndex="-1"
          className={classes}
        >
          All
        </span>
      </div>
      <div className="product-list">
        {
          loading
            ? <Loading/>
            : (
              <Row type="flex" gutter={18}>
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
  activeCategory: oneOfType([string, number]).isRequired
};

export default withProducts(Products);
