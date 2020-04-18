import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




const firebaseConfig= {
    apiKey: "AIzaSyB2Li-qMXbkXs52PlQBlT1NRxDQ_OmlJ9I",
    authDomain: "crown-db-3832b.firebaseapp.com",
    databaseURL: "https://crown-db-3832b.firebaseio.com",
    projectId: "crown-db-3832b",
    storageBucket: "crown-db-3832b.appspot.com",
    messagingSenderId: "723968229219",
    appId: "1:723968229219:web:58a0b452c163adea485d56",
    measurementId: "G-JRPK40F2YN"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


//fuctin for storing Auth.uid into our firestore
export const createUserProfileDocument = async (userAuth,additonalData)=>{
  
    if(!userAuth) return; //if we get null then we dont want anything
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);//our user doc object for reference
    
    const snapShot = await userRef.get();//snapShop is just crud methods on document ref object
    
    //setting up the user details if user is not already created using the snapShot
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
     try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additonalData
        });

     }catch(error){
         console.log(`there was some error`,error.message);
     }
        
    } 
    
    return userRef;
    
}

export const convertCollectionsSnapshotToMap =(collections)=>{

    const transformedCollection = collections.docs.map(doc=>{
        
        const {title,items} = doc.data();
        
        return{
                routeName:encodeURI(title.toLowerCase()),
                id:doc.id,
                title,
                items
        }
     
    });

       
    return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});

    
}


const provider = new firebase.auth.GoogleAuthProvider(); //creating an instance of googleprovider object

provider.setCustomParameters({'promt':'select_account'});//using google auth provider

//to create a collection for out cart items

export const addCollectionAndDocuments = async (collectionKey,ObjectsToAdd)=>{
    
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    ObjectsToAdd.forEach(obj=>{
        const newDocRef = collectionRef.doc();//creating a new ref with random id to store our data.
        console.log(newDocRef);
        batch.set(newDocRef,obj);
    });

   return await batch.commit();
}

export const signInWithGoogle = ()=>(auth.signInWithPopup(provider));

export default firebase;





