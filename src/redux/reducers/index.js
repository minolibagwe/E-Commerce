// rootReducer.js
import { combineReducers } from "redux";
import {
  productReducer,
  selectedproductReducer,
  handlecart,
} from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedproductReducer,
  cart: handlecart,
});

export default rootReducer;
