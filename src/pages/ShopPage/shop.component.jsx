import React from 'react';


import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container.component';
import CollectionPageContainer from '../collection/collection.container.component';



import {Route} from 'react-router-dom';



import {connect} from 'react-redux';


import {fetchCollectionsStartAsync} from '../../Redux/shop/shop.action';








class Shop extends React.Component{
 

  componentDidMount(){
   
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
    
  }

render(){
  

   
  const {match} = this.props;
  
  return (
    
    <div>
      <Route exact path={`${match.path}`} 
      component={CollectionsOverviewContainer} />

      <Route path={`${match.path}/:collectionId`} 
      component={CollectionPageContainer}/>
    </div>

  ) 

 }    
}



const mapDispatchToProps = dispatch =>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
});


export default connect(null,mapDispatchToProps)(Shop);