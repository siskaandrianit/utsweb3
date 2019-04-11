import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
	this.state = {
		sapa : 'Ganti Tema'
	}
	} 
	clicked = () => {
	if(this.state.sapa === ':*'){
	console.log("tru :*");
	this.setState(
	{
	sapa : 'Theme Light'
	}
	);
			} else{
		this.setState(
		{
		sapa : 'Theme Dark'
		}
		);
	}

	}
		render() {
		return (
	<div className="App">
		<h1>{this.state.sapa}</h1>
		<button className="btn btn-primary btn-lg active" aria-pressed="true" onClick={this.clicked}>Click</button>
	</div>
	);
	}
	}

export default App;
