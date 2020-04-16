import React from 'react';



import {connect} from 'react-redux';
import {clearCartItems} from '../../Redux/cart/cart-action';
import {addItems,removeCartItem} from '../../Redux/cart/cart-action';

import {CheckoutItemContainer,ImageContainer,TextSpanContainer,QuantityContainer,RemoveButtonContainer} from './checkout-item.styles';

const CheckoutItem = ({cartItem,clearItems,addItems,removeCartItem})=>{
  
  const {name,imageUrl,quantity,price} = cartItem;
  
  return (
    <CheckoutItemContainer>
     <ImageContainer>
      <img src={imageUrl} alt='item'/>
     </ImageContainer>

     <TextSpanContainer>{name}</TextSpanContainer>
     <QuantityContainer>
      <div onClick={()=>removeCartItem(cartItem)}>&#10094;</div> 
       <span>{quantity}</span>
      <div  onClick={()=>addItems(cartItem)}>&#10095;</div> 
     </QuantityContainer>
     <TextSpanContainer>{price}</TextSpanContainer>
    

     <RemoveButtonContainer  onClick={()=>clearItems(cartItem)}>&#x2715;</RemoveButtonContainer>
    </CheckoutItemContainer>
   )
};

const mapDispatchToProps = dispatch=>({
  clearItems:(item)=>{dispatch(clearCartItems(item))},
  addItems:(item)=>{dispatch(addItems(item))},
  removeCartItem:(item)=>{dispatch(removeCartItem(item))}
})

export default connect(null,mapDispatchToProps)(CheckoutItem);