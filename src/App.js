import React, { Component } from 'react';
import './App.css';
import Homepage from './homepage.component';
class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (<div>
      <Homepage />
    </div>)
  }
}

export default App;
