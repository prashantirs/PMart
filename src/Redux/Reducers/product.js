import { ActionTypes } from "../Constants/action-type";

export const CartReducer = (state = [], {type,payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const filteredList = state.filter((item) => item.id === payload.id)
            if(filteredList.length > 0){
                return state.map((item) => {
                    if(item.id === payload.id){
                        return {...item, quantity: 1}
                    }else{
                        return item;
                    }
                })
            }else{
                return [...state,{...payload, quantity: 1}];
            }

        case ActionTypes.REMOVE_FROM_CART:
            return state.filter((item) => item.id !== payload.id);

        case ActionTypes.INCREASE_QUANTITY:
            state.forEach((item) => {
                if(item.id === payload){
                    item.quantity += 1;
                }
            })
            return state;
        case ActionTypes.DECREASE_QUANTITY:
            state.forEach((item) => {
                if(item.id === payload){
                    item.quantity -= 1;
                }
            })
            return state;   
        case ActionTypes.ADD_TO_CART_FROM_PRODUCT:  
        console.log(payload)
        console.log(state)
            const filteredList2 = state.filter((item) => item.id === payload.data.id)
            if(filteredList2.length > 0){
                return state.map((item) => {
                    if(item.id === payload.data.id){
                        return {...item, quantity: payload.quantity}
                    }else{
                        return item;
                    }
                })
            }else{
                return [...state,{...payload.data, quantity: payload.quantity}];
            }
        

        default:
            return state;    
    }
}
export const SelectedProductReducer = (state = {}, {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}