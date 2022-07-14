import { combineReducers } from "redux";

import productDataReducer from "./productData/reducer";
import shoppingCartReducer from "./shoppingCart/reducer";


const rootReducer = combineReducers({
  productData: productDataReducer,
  shoppingCart: shoppingCartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;