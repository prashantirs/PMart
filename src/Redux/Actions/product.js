import { ActionTypes } from "../Constants/action-type"

export const addToCart = (data) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: data,
    }
}

export const increaseQuantity = (id) => {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        payload: id,
    }
}
export const decreaseQuantity = (id) => {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
        payload: id,
    }
}