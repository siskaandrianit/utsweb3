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
	if(this.state.sapa === ':*'){
	console.log("tru :*");
	this.setState(
	{
	sapa : ':V'
	}
	);
			} else{
		this.setState(
		{
		sapa : ':*'
		}
		);
	}

	}
		render() {
		return (
	<div className="App">
	<h1>{this.state.sapa}</h1>
<button className="btn btn-primary btn-lg active" aria-pressed="true" onClick={this.clicked}>Ganti Tema</button>
</div>
);
}
}

export default App;
