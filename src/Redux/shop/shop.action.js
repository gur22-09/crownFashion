import ShopActionTypes from './shop.types';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = ()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
});


export const fetchCollectionsStartSuccess = (collectionsMap)=>({
 type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
 payload:collectionsMap
});

export const fetchCollectionsStartFailure = errorMessage =>({
 type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
 payload:errorMessage
})

export const fetchCollectionsStartAsync = ()=>{

    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        
        //now using thunk we are going to dispatch the fetchCollectionsStart so that it can change state via reducer
            
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapShot=>{
    
          const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    
          //now after successfully getting the collctions we are going to dispatch our fetchCollectionsSuccess function 

          dispatch(fetchCollectionsStartSuccess(collectionsMap));
          
        }).catch(error=>dispatch(fetchCollectionsStartFailure(error))); 
    }
}