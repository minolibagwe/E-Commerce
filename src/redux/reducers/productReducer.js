// productReducer.js
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
const cart = [];
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedproductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state };
    default:
      return state;
  }
};

export const removeselectedProductsReducer = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const handlecart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ActionTypes.ADD_CART:
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
    case ActionTypes.DELETE_CART:
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    default:
      return state;
  }
};
