import React, { Component } from 'react';
import './App.css';

import {Route,Switch,Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/shop.component';
import Header from './components/Header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

import{auth,createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/user/user-action';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './Redux/user/user.selector';


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
      
    }
      
      setCurrentUser(userAuth);
      
      
    
      
      
      
    });
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
     <Route exact path='/checkout' component={Checkout} />
     <Route exact path='/signin' 
      render ={()=>this.props.currentUser?
      (<Redirect to='/'/>)
      :
      (<SignInAndSignUp/>)}
     />
    </Switch>
    <Footer />
      
    </div>)
  }
}

const matchDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  
});
 
export default connect(mapStateToProps,matchDispatchToProps)(App);
