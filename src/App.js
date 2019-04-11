import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			color: 'hitam',
			title:'Gelap',
		};
	}
	clicked(menu) {
		this.setState({
		color:menu.color,
		img:menu.img,
		title:menu.title,
		});
	}
  render() {
    return (
     <div id="app">
			<nav className="nav">{ this.props.items.map(( menu, index) => {
				var style = 'menu';
				
				if (this.state.color === menu.color) {
					style = `${style} is-active`;
				}
				
				return <a
					className={style+" "+menu.color}
					
					onClick={this.clicked.bind(this,menu)}
					key={index}
				>
					{menu.title}
				</a>;
			} ) }
			</nav>
      </div>
    );
  }
}

export default App;
