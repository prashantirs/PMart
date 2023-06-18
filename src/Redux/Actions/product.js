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
export const addSelectedProduct = (data) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: data,
    }
}
export const addToCartFromProduct = (data,quantity=1) => {
    return {
        type: ActionTypes.ADD_TO_CART_FROM_PRODUCT,
        payload: {
            data: data,
            quantity: quantity,
        }
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}