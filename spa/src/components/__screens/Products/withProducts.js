import React, { Component } from 'react';
import { generatePath } from 'react-router';

import { API } from '../../../constants';
import { getWoo } from '../../../services/api.services';

const withProducts = (ProductsComponent) => {
  class WithProducts extends Component {
    state = {
      products: [],
      activeCategory: 145,
      loading: true
    };

    componentDidMount() {
      this.getProducts();
    }

    setCategory = (catID) => {
      this.setState({
        activeCategory: catID,
        loading: true
      }, () => {
        this.getProducts();
      });
    };

    getProducts = () => {
      const { activeCategory } = this.state;
      let apiEndpoint = generatePath(API.ENDPOINTS.PRODUCTS_BY_CATID, { id: activeCategory });

      if (activeCategory === 'all') {
        apiEndpoint = API.ENDPOINTS.PRODUCTS_ALL;
      }

      getWoo(apiEndpoint)
        .then((response) => {
          const products = response.map((product) => ({
            name: product.name,
            id: product.id,
            price: product.price,
            img: product.images[0].src
          }));
          this.setState({
            products,
            loading: false
          });
        })
        .catch((e) => console.log(e));
    };

    render() {
      const {
        products,
        loading,
        activeCategory
      } = this.state;

      return (
        <ProductsComponent
          activeCategory={activeCategory}
          products={products}
          setCategory={this.setCategory}
          loading={loading}
        />
      );
    }
  }

  return WithProducts;
};

export default withProducts;
