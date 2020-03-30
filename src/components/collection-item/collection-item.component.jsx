import React from 'react';
import './collection-item.styles.scss';

import CustomButton from  '../custom-button/custom-button.component';


import {connect} from 'react-redux';

import {addItems} from '../../Redux/cart/cart-action';

const CollectionItem =({item,addItems})=>{
  const {id,imageUrl,name,price} = item;  
  return(
    <div key={id} className='collection-item'>
      <div className='image' style={{
        backgroundImage:`url(${imageUrl})`}} />
      <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={()=>{addItems(item)}} inverted>Add to cart</CustomButton>  
    </div>    
  )
}


const matchDispatchToProps = dispatch =>({
  addItems : (item) =>{dispatch(addItems(item))}
});


export default connect(null,matchDispatchToProps)(CollectionItem);