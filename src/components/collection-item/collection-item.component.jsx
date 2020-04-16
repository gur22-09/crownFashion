import React from 'react';





import {connect} from 'react-redux';

import {addItems} from '../../Redux/cart/cart-action';

import {CollectionItemContainer,AddButton,BackgroundImage,CollectionFooterContainer,NameContainer,PriceContainer} from './collection-item.styles';

const CollectionItem =({item,addItems})=>{
  const {id,imageUrl,name,price} = item;  
  return(
    <CollectionItemContainer key={id} >
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={()=>{addItems(item)}} inverted>Add to cart</AddButton>  
    </CollectionItemContainer>    
  )
}


const matchDispatchToProps = dispatch =>({
  addItems : (item) =>{dispatch(addItems(item))}
});


export default connect(null,matchDispatchToProps)(CollectionItem);