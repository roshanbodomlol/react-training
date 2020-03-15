import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from '../constants/action-types';

const initState = {
  items: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM: {
      const { items } = state;
      const updatedItems = [...items];
      updatedItems.push(action.payload);
      return {
        items: updatedItems
      };
    }

    case REMOVE_CART_ITEM: {
      const { items } = state;
      const removeIndex = items.indexOf(action.payload);
      const updatedItems = [...items];
      updatedItems.splice(removeIndex, 1);
      return {
        items: updatedItems
      };
    }

    default: {
      return state;
    }
  }
};
