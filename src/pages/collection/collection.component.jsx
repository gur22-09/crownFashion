import React from 'react';



import {connect} from 'react-redux';

import {selectShopCollection} from '../../Redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';


import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({collection:{title,items}})=>{
  
  
  return(   
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
              {items.map(item=>(
                <CollectionItem key={item.id} item={item} />
              ))}
        </CollectionItemsContainer>
    </CollectionPageContainer>
  )
};

//map state to props also has access to the props of the component it is maping the state to, i.e in our case the Collection page
const mapStateToProps =(state,ownProps)=>({
  collection:selectShopCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);