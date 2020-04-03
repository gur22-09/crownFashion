import {createSelector} from 'reselect';

const selectCart  = state=>state.cart;

//memoized selector using createSelector
export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((accumulator,cartItem)=>accumulator+cartItem.quantity,0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
);


export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((accumulator,cartItem)=>accumulator+cartItem.quantity*cartItem.price,0)
);
