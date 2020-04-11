import React from 'react';
import '../ShopPage/shop.component.styles.scss';



import CollectionOverview from '../../collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {Route} from 'react-router-dom';

const Shop = ({match})=>{
   
return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    ) 

}    




export default Shop;