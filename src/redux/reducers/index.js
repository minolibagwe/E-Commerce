import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootreducers = combineReducers({
  allProducts: productReducer,
});

export default rootreducers;
