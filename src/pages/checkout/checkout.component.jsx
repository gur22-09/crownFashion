import React from 'react';


import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotalPrice} from '../../Redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';


import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';


const Checkout = ({cartItems,totalPrice})=>(
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
          <HeaderBlockContainer><span>Description</span></HeaderBlockContainer>
          <HeaderBlockContainer><span>quantity</span></HeaderBlockContainer>
          <HeaderBlockContainer><span>price</span></HeaderBlockContainer>
          <HeaderBlockContainer><span>remove</span></HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem=>
             <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }  

        <TotalContainer>
           Total:₹{totalPrice}
        </TotalContainer>
        <WarningContainer>
          *please use the following card for test payments*
           <br />
           card no-4242 4242 4242 4242, expiration-01/21 and CVV-123  
        </WarningContainer>
        <StripeButton price={totalPrice} />
    </CheckoutPageContainer>

);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalPrice:selectCartTotalPrice
})

export default connect(mapStateToProps)(Checkout);