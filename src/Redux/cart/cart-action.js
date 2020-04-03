import CartActionTypes from './cart.types';

export const toggleCartHidden = ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});


export const addItems = item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
});


export const clearCartItems = item=>({
    type:CartActionTypes.CLEAR_CART_ITEM,
    payload:item
});

export const removeCartItem = item=>({
    type:CartActionTypes.REMOVE_CART_ITEM,
    payload:item
})