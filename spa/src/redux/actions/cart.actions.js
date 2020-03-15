import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from '../constants/action-types';

export const addCartItem = (id) => ({
  type: ADD_CART_ITEM,
  payload: id
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
});
