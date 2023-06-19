import { combineReducers } from "redux";
import { CartReducer, FavouriteReducer, SelectedProductReducer } from "./product";


const reducers = combineReducers({
    cart: CartReducer,
    selectedProduct: SelectedProductReducer,
    favourite : FavouriteReducer
});

export default reducers;