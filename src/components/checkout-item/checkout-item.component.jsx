import React from 'react';

import './checkout-item.styles.scss';

import {connect} from 'react-redux';
import {clearCartItems} from '../../Redux/cart/cart-action';
import {addItems,removeCartItem} from '../../Redux/cart/cart-action';


const CheckoutItem = ({cartItem,clearItems,addItems,removeCartItem})=>{
  
  const {name,imageUrl,quantity,price} = cartItem
  
  return (
    <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item'/>
    </div>

    <span className='name'>{name}</span>
    <span className='quantity'>
     <div className='arrow' onClick={()=>removeCartItem(cartItem)}>&#10094;</div> 
      {quantity}
     <div className='arrow' onClick={()=>addItems(cartItem)}>&#10095;</div> 
    </span>
    <span className='price'>{price}</span>
    

    <div className='remove-button' onClick={()=>clearItems(cartItem)}>&#x2715;</div>
   </div>
   )
};

const mapDispatchToProps = dispatch=>({
  clearItems:(item)=>{dispatch(clearCartItems(item))},
  addItems:(item)=>{dispatch(addItems(item))},
  removeCartItem:(item)=>{dispatch(removeCartItem(item))}
})

export default connect(null,mapDispatchToProps)(CheckoutItem);