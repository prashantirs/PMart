import { combineReducers } from "redux";
import { CartReducer, FavouriteReducer, SelectedProductReducer, userReducer } from "./product";


const reducers = combineReducers({
    cart: CartReducer,
    selectedProduct: SelectedProductReducer,
    favourite : FavouriteReducer,
    user: userReducer,
});

export default reducers;