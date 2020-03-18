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


const provider = new firebase.auth.GoogleAuthProvider(); //creating an instance of googleprovider object

provider.setCustomParameters({'promt':'select_account'});//using google auth provider

export const signInWithGoogle = ()=>(auth.signInWithPopup(provider));

export default firebase;





