import { combineReducers } from 'redux';

import productReducer from './product.reducer';
import cartReducer from './cart.reducer';

const reducers = combineReducers({
  product: productReducer,
  cart: cartReducer
});

export default reducers;
