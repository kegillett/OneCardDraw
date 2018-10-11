import React, { Component } from 'react';
import './App.css';
import AppHeaderBar from './Components/NavBar';
import MainComponent from './Components/MainComponent';

class App extends Component {
	render() {
		return ( <div className="App">
			<AppHeaderBar/>
			<MainComponent/>
		</div> );
	}
}

export default App;
