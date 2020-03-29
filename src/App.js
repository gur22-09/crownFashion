import React, { Component } from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import{auth,createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/user/user-action';


class App extends Component{
  
  unsubscribeAuth = null;

  componentDidMount(){
    
    const {setCurrentUser} = this.props;
     
   this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{ //this can be null or the obj.

    if(userAuth){
        
      const userRef = await createUserProfileDocument(userAuth);//geeting userRef obj.

       userRef.onSnapshot(snapshot=>{
        setCurrentUser({currentUser:{
          id:snapshot.id,
          ...snapshot.data()
        }},()=>{
          console.log(this.state);
        });
      });
      
    }else{
      setCurrentUser(userAuth);
    }
    
      
      
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    
    return (<div>
    <Header />
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
     <Route path='/signin' component={SignInAndSignUp} />
    </Switch>
    
      
    </div>)
  }
}

const matchDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



export default connect(null,matchDispatchToProps)(App);
