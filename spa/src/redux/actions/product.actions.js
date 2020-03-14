import {
  SHOW_PRODUCT_MODAL,
  HIDE_PRODUCT_MODAL,
  SHOW_PRODUCT_MODAL_CONTENT
} from '../constants/action-types';

export const showProductModal = () => ({
  type: SHOW_PRODUCT_MODAL
});

export const hideProductModal = () => ({
  type: HIDE_PRODUCT_MODAL
});

export const showProductModalContent = (productModalImage, productModalContent) => ({
  type: SHOW_PRODUCT_MODAL_CONTENT,
  payload: {
    productModalImage,
    productModalContent
  }
});
