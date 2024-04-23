import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
export const removeselectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const addCart = (product) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: ActionTypes.DELETE_CART,
    payload: product,
  };
};
