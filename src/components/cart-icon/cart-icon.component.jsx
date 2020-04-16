import React from 'react';




import {connect} from 'react-redux';

import {toggleCartHidden} from '../../Redux/cart/cart-action';

import {selectCartItemsCount} from '../../Redux/cart/cart.selectors';


import {CartIconContainer,ShoppingIconContainer,ItemCountContainer} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <CartIconContainer  onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const matchDispatchToProps = (dispatch)=>({
    toggleCartHidden:()=>{ dispatch(toggleCartHidden()) }
});

//this fucntion below is a selctor as it gets a portion of the state. caviot is whenever any reducerupdates it will always be called.
const mapStateToProps = (state)=>({
    itemCount:selectCartItemsCount(state)  
});


export default connect(mapStateToProps,matchDispatchToProps)(CartIcon);
