import React from 'react';

import { WP } from '../../../constants';
import './Products.scss';

const Products = () => {
  const catList = WP.PRODUCT_CATEGORIES.map((cat) => (
    <span
      key={`cat-${cat.id}`}
      role="button"
      onClick={() => console.log(cat.id)}
      tabIndex="-1"
    >
      {cat.name}
    </span>
  ));

  return (
    <div id="products" className="screen __fullHeight">
      <div className="cat-bar">
        {catList}
      </div>
      <div className="product-list"/>
    </div>
  );
};

export default Products;
