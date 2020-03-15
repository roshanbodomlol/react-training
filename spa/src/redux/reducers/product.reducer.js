import {
  SHOW_PRODUCT_MODAL,
  HIDE_PRODUCT_MODAL,
  SHOW_PRODUCT_MODAL_CONTENT
} from '../constants/action-types';

const initState = {
  modalVisible: false,
  productModalImage: '',
  productModalContent: '',
  productContentLoading: true,
  productId: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_MODAL:
      return {
        ...state,
        modalVisible: true
      };
    case HIDE_PRODUCT_MODAL:
      return {
        ...state,
        modalVisible: false
      };
    case SHOW_PRODUCT_MODAL_CONTENT:
      return {
        ...action.payload,
        productContentLoading: false,
        modalVisible: true
      };
    default:
      return state;
  }
};
