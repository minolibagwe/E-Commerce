// rootReducer.js
import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedproductReducer,
});

export default rootReducer;
