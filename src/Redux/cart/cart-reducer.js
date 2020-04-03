import CartActionTypes from './cart.types';

import {addItemToCart} from './cart.utils';
import {removeItemsFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};



const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

            //note not adding payload as its not necessary and optional

            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems,action.payload)
                }

            case CartActionTypes.CLEAR_CART_ITEM:
                return{
                    ...state,
                    cartItems:state.cartItems.filter(cartItem=>action.payload.id !==cartItem.id)
                } 
            
            case CartActionTypes.REMOVE_CART_ITEM:
                return{
                    ...state,
                    cartItems:removeItemsFromCart(state.cartItems,action.payload)
                }    
            default:
                return state;
    }
}


export default CartReducer;
