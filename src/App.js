import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import{auth} from './firebase/firebase.utils';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  unsubscribeAuth = null;

  componentDidMount(){
   this.unsubscribeAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    
    return (<div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
     <Route path='/signin' component={SignInAndSignUp} />
    </Switch>
    
      
    </div>)
  }
}

export default App;
