import { ActionTypes } from "../Constants/action-type";

export const CartReducer = (state = [], {type,payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            console.log("payload",payload);
            const filteredList = state.filter((item) => item.id === payload.id)
            if(filteredList.length > 0){
                return state.map((item) => {
                    if(item.id === payload.id){
                        return {...item, quantity: item.quantity + 1}
                    }
                    return {item};
                })
            }else{
                return [...state,{...payload, quantity: 1}];
            }
        default:
            return state;    
    }
}