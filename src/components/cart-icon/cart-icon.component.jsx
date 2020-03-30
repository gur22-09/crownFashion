import React from 'react';
import './cart-icon.styles.scss';

import {ReactComponent as ShopingIcon} from '../../assets/shoping-bag.svg';

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../Redux/cart/cart-action';

const CartIcon = ({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const matchDispatchToProps = (dispatch)=>({
    toggleCartHidden:()=>{ dispatch(toggleCartHidden()) }
})


export default connect(null,matchDispatchToProps)(CartIcon);