import React from 'react';



import {CartItemContainer,CartItemImage,ItemDetailsContainer} from './cart-item.styles';


const CartItem = ({item:{imageUrl,name,price,quantity}})=>(
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} &times ₹{price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);


export default CartItem;