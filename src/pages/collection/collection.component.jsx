import React from 'react';

import './collection.styles.scss';

import {connect} from 'react-redux';

import {selectShopCollection} from '../../Redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection:{title,items}})=>{
  
  
  return(   
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
              {items.map(item=>(
                <CollectionItem key={item.id} item={item} />
              ))}
        </div>
    </div>
  )
};

//map state to props also has access to the props of the component it is maping the state to, i.e in our case the Collection page
const mapStateToProps =(state,ownProps)=>({
  collection:selectShopCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);