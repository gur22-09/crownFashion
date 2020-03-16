import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage.component';
class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    const Hats =(props)=>{
      console.log(props)
      return (
        <div>
          <h1>Hats</h1>
        </div>
      )
    }
    return (<div>
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/hats' component={Hats} />
    </Switch>
    
      
    </div>)
  }
}

export default App;
