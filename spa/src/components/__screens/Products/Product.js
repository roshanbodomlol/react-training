import React, { Component } from 'react';
import { Col } from 'antd';
import { shape, string, func } from 'prop-types';
import { generatePath } from 'react-router';
import { connect } from 'react-redux';

import { showProductModal, showProductModalContent } from '../../../redux/actions/product.actions';
import { getWoo } from '../../../services/api.services';
import { API } from '../../../constants';

class Product extends Component {
  showModal = () => {
    const { product, dispatch } = this.props;

    dispatch(showProductModal());
    getWoo(generatePath(API.ENDPOINTS.PRODUCT_BY_ID, { id: product.id }))
      .then((productObject) => {
        const productImage = productObject.images[0].src;
        const productContent = productObject.description;

        dispatch(showProductModalContent(productImage, productContent, product.id));
      })
      .catch((e) => console.error(e));
  };

  render() {
    const { product } = this.props;

    return (
      <Col span={6}>
        <div
          className="product"
          role="button"
          tabIndex="-1"
          onClick={this.showModal}
        >
          <div className="product-image">
            <img src={product.img} alt=""/>
          </div>
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-price">Rs. {product.price}</div>
          </div>
        </div>
      </Col>
    );
  }
}

Product.propTypes = {
  product: shape({
    img: string.isRequired,
    name: string.isRequired,
    price: string.isRequired
  }).isRequired,
  dispatch: func.isRequired
};

export default connect()(Product);
