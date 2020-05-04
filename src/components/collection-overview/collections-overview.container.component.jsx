import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';


import {selectIsCollectionFetching} from '../../Redux/shop/shop.selectors';

import CollectionOverview from './collection-overview.component';

import LoadingSpinner from '../loading-spinner/loading-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
});




const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    LoadingSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;

//the above is equivalent to connect(mapStateToProps)(LoadingSpinner(CollectionOverview));
