import {connect} from 'react-redux';
import {compose} from 'redux';

import CollectionPage from './collection.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import {createStructuredSelector} from 'reselect';
import {isCollectionLoaded} from '../../Redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading:state=>!isCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    LoadingSpinner
)(CollectionPage);

export default CollectionPageContainer;