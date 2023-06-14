import { ActionTypes } from "../Constants/action-type"

export const addToCart = (data) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: data,
    }
}