import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../Redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import {withRouter} from 'react-router-dom';

import {toggleCartHidden} from '../../Redux/cart/cart-action';


const CartDropDown = ({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
         {  cartItems.length? 
            cartItems.map(cartItem=>{
            return <CartItem id={cartItem.id} item={cartItem} key={cartItem.id} />
            })
            :
            <span className='empty-message'>your cart is empty</span>
         }
        </div>
        <CustomButton onClick={()=>{
            history.push('checkout');
            dispatch(toggleCartHidden())}}
        >GO TO CHECKOUT</CustomButton>
    </div>
);


const mapStateToProps =createStructuredSelector({
 cartItems:selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));