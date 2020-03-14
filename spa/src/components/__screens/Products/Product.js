import React, { Component } from 'react';
import { Col } from 'antd';
import { shape, string } from 'prop-types';
import { generatePath } from 'react-router';

import Modal from '../../Modal';
import { getWoo } from '../../../services/api.services';
import { API } from '../../../constants';

class Product extends Component {
  state = {
    modalVisible: false,
    loadingContent: true,
    productImage: '',
    productContent: ''
  };

  showModal = () => {
    const { product } = this.props;

    this.setState({ modalVisible: true, loadingContent: true });
    getWoo(generatePath(API.ENDPOINTS.PRODUCT_BY_ID, { id: product.id }))
      .then((productObject) => {
        this.setState({
          productImage: productObject.images[0].src,
          productContent: productObject.description
        }, () => {
          this.setState({ loadingContent: false });
        });
      })
      .catch((e) => console.error(e));
  };

  hideModal = () => {
    this.setState({ modalVisible: false, loadingContent: true });
  }

  render() {
    const { product } = this.props;
    const { modalVisible, loadingContent, productImage, productContent } = this.state;

    return (
      <>
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
        <Modal
          active={modalVisible}
          loading={loadingContent}
          onClose={this.hideModal}
          image={productImage}
          content={productContent}
        >
          content
        </Modal>
      </>
    );
  }
}

Product.propTypes = {
  product: shape({
    img: string.isRequired,
    name: string.isRequired,
    price: string.isRequired
  }).isRequired
};

export default Product;
