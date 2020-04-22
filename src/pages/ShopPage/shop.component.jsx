import React from 'react';
import {createStructuredSelector} from 'reselect';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {Route} from 'react-router-dom';



import {connect} from 'react-redux';

import {selectIsCollectionFetching} from '../../Redux/shop/shop.selectors';
import {fetchCollectionsStartAsync} from '../../Redux/shop/shop.action';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);



class Shop extends React.Component{
 

  componentDidMount(){
   
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
    
  }

render(){
  

   
  const {match,isCollectionLoading} = this.props;
  
  return (
    
    <div>
      <Route exact path={`${match.path}`} 
      render={(props)=><CollectionOverviewWithSpinner isLoading={isCollectionLoading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} 
      render={(props)=><CollectionPageWithSpinner isLoading={isCollectionLoading} {...props} />} />
    </div>

  ) 

 }    
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoading:selectIsCollectionFetching
});

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps,mapDispatchToProps)(Shop);