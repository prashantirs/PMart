import { ActionTypes } from "../Constants/action-type"
import products from '../../API/products'

export const addToCart = (data) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: data,
    }
}