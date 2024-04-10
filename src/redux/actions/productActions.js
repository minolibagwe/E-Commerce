import { actionTypes } from "../contants/action-types";
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const SELECTED_PRODUCT = (products) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

// export const REMOVE_SELECTED_PRODUCT = (products) => {
//   return {
//     type: actionTypes.REMOVE_SELECTED_PRODUCT,
//     payload: products,
//   };
// };
