import React from 'react';

import './card-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';


const CardDropDown = ()=>(
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


export default CardDropDown;