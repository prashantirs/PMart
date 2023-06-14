import { combineReducers } from "redux";
import { CartReducer } from "./product";


const reducers = combineReducers({
    cart: CartReducer,
});

export default reducers;