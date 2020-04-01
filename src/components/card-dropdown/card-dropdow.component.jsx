import React from 'react';

import './card-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../Redux/cart/cart.selectors';


const CardDropDown = ({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
         {
            cartItems.map(cartItem=>{
            return <CartItem id={cartItem.id} item={cartItem} key={cartItem.id} />
            })
         }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


const mapStateToProps =(state)=>({
 cartItems:selectCartItems(state)
});


export default connect(mapStateToProps)(CardDropDown);