import React, { Component } from "react";
import Landing from "./Landing";
import Cards from "./Cards"
import AddProfile from "./AddProfile"
// import Route from 'react-router';
import { Redirect, Route, Switch, } from 'react-router-dom';

export default class MainComponent extends Component {

	render() {

		return ( <div className="App-intro">
			<Switch>
				<Route exact={true} path="/" component={Landing}/>
				<Route path="/addProfile" component={AddProfile}/>
				<Route path="/cards" component={Cards}/>
				<Redirect to="/"/>
			</Switch>
		</div> );
	}
}
