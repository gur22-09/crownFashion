import React from 'react';
import './cart-icon.styles.scss';

import {ReactComponent as ShopingIcon} from '../../assets/shoping-bag.svg';

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../Redux/cart/cart-action';

import {selectCartItemsCount} from '../../Redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const matchDispatchToProps = (dispatch)=>({
    toggleCartHidden:()=>{ dispatch(toggleCartHidden()) }
});

//this fucntion below is a selctor as it gets a portion of the state. caviot is whenever any reducerupdates it will always be called.
const mapStateToProps = (state)=>({
    itemCount:selectCartItemsCount(state)  
});


export default connect(mapStateToProps,matchDispatchToProps)(CartIcon);