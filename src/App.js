import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
	this.state = {
		sapa : 'Hallo'
	}
	} 
	clicked = () => {
	if(this.state.sapa === 'Theme Light'){
	console.log("tru Theme Light");
	this.setState(
	{
	sapa : 'Theme Dark'
	}
	);
			} else{
		this.setState(
		{
		sapa : 'Theme Light'
		}
		);
	}

	}
		render() {
		return (
	<div className="App">
	<h1>{this.state.sapa}</h1>
<button className="btn btn-primary btn-lg active" aria-pressed="true" onClick={this.clicked}>Ganti</button>
</div>
);
}
}

export default App;
