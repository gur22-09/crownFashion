import React from 'react';


import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../Redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import {withRouter} from 'react-router-dom';

import {toggleCartHidden} from '../../Redux/cart/cart-action';

import {CartDropdownContainer,CartDropdownButton,EmptyMessageContainer,CartItemsContainer} from './cart-dropdown.styles';


const CartDropDown = ({cartItems,history,dispatch,match})=>{
    console.log(history,match);
    return(
        <CartDropdownContainer>
        <CartItemsContainer>
         {  cartItems.length? 
            cartItems.map(cartItem=>{
            return <CartItem id={cartItem.id} item={cartItem} key={cartItem.id} />
            })
            :
            <EmptyMessageContainer>your cart is empty</EmptyMessageContainer>
         }
        </CartItemsContainer>
        <CartDropdownButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())}}
        >GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
    );
}


const mapStateToProps =createStructuredSelector({
 cartItems:selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));