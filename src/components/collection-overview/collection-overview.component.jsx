import React from 'react';
import {connect} from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../Redux/shop/shop.selectors';

import {createStructuredSelector} from 'reselect';


import  {CollectionOverviewContainer} from './collection-overview.styles';




const CollectionOverview = ({collections})=>{
    
    
    return(
    <CollectionOverviewContainer>
     
     <div>
        {collections.map(({id,...otherCollectionProps})=>{
         return <CollectionPreview key={id} {...otherCollectionProps} />
        })}
     </div>

    </CollectionOverviewContainer>
    )
    };


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);