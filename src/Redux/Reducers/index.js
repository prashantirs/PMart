import { combineReducers } from "redux";
import { CartReducer, SelectedProductReducer } from "./product";


const reducers = combineReducers({
    cart: CartReducer,
    selectedProduct: SelectedProductReducer,
});

export default reducers;