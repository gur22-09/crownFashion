import React from 'react';
import {connect} from 'react-redux';

import CollectionPreview from '../components/collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../Redux/shop/shop.selectors';

import {createStructuredSelector} from 'reselect';


import './collection-overview.styles.scss';



const CollectionOverview = ({collections})=>{
    
    console.log(collections);
    return(
    <div className='collection-overview'>
     
     <div>
        {collections.map(({id,...otherCollectionProps})=>{
         return <CollectionPreview key={id} {...otherCollectionProps} />
        })}
     </div>

    </div>
    )
    };


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);