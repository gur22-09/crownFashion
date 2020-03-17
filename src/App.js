import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/ShopPage/shop.component';
class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    const Hats =(props)=>{
      return (
        <div>
          <h1>Hats</h1>
        </div>
      )
    }
    return (<div>
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={Shop} />
    </Switch>
    
      
    </div>)
  }
}

export default App;
