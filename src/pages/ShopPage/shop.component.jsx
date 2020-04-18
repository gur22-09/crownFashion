import React from 'react';




import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {Route} from 'react-router-dom';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import {updateCollections} from '../../Redux/shop/shop.action';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);

class Shop extends React.Component{
  state ={
    loading:true
  };

  unsubscribeFromCollectionSnap = null;

  componentDidMount(){

    const {updateCollections} =this.props;

    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromCollectionSnap = collectionRef.onSnapshot(async snapShot=>{

      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);

      updateCollections(collectionsMap);
      this.setState({loading:false});
    })
  }

render(){

  const {match} = this.props;
  const {loading} = this.state;
  return (
    
    <div>
      <Route exact path={`${match.path}`} 
      render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} 
      render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
    </div>

  ) 

 }    
}

const mapDispatchToProps = dispatch =>({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(Shop);