import { ActionTypes } from "../contants/action-types";

//always take inital state and actions
const initialState = {
  products: [
    {
      id: 1,
      title: "minoli",
      category: "programmer",
    },
  ],
};
//reducer for product
export const productReducer = (state = initialState, { type, paylaod }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
