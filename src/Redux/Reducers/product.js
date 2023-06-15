import { ActionTypes } from "../Constants/action-type";

export const CartReducer = (state = [], {type,payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const filteredList = state.filter((item) => item.id === payload.id)
            if(filteredList.length > 0){
                return state.map((item) => {
                    if(item.id === payload.id){
                        return {...item, quantity: item.quantity + 1}
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

        default:
            return state;    
    }
}