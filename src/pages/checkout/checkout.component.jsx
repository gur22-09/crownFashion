import React from 'react';
import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotalPrice} from '../../Redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';


const Checkout = ({cartItems,totalPrice})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
          <span className='checout-block'>Product</span>
          <span className='checout-block'>Description</span>
          <span className='checout-block'>quantity</span>
          <span className='checout-block'>price</span>
          <span className='checout-block'>remove</span>
        </div>
        {
            cartItems.map(cartItem=>
             <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }  

        <div className='total'>
           Total:₹{totalPrice}
        </div>
        <div className='test-warning'>
          *please use the following card for test payments*
           <br />
           card no-4242 4242 4242 4242, expiration-01/21 and CVV-123  
        </div>
        <StripeButton price={totalPrice} />
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalPrice:selectCartTotalPrice
})

export default connect(mapStateToProps)(Checkout);