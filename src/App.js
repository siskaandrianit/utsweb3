import React, { Component } from 'react';
import './App.css';
import BodyColor from './BodyColor'

class App extends Component {
  constructor(props){
    super()
    this.state = {
      isAMount: false,
      text : "Theme Light"

    }
  
  } 
  handleClick(){
    this.setState({
      isAMount: !this.state.isAMount
    })
    if(!this.state.isAMount){
      this.setState({
          text : ""
        }
      );
    } else {
      this.setState({
        text : "Light Theme"
      }
    );
    }
  }
  
  render() {
    return (
      <div> 
        <button onClick={this.handleClick.bind(this)}> ganti tema </button> 
        <br />
        <br />
        <div>
          <div> 
            {this.state.text}
          </div>
          {this.state.isAMount && <BodyColor /> } 
        </div>
      </div>
    );
  }
}

export default App;
