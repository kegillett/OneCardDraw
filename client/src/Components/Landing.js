import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
	render() {
		return ( <div className="mainContent">
			<Grid container="container" direction="row" justify="center" alignItems="center">
				<Button className="button" color="inherit" size="large" to="/cards" component={Link}>Cards</Button>
				<Button className="button" color="inherit" size="large" to="/addProfile" component={Link}>Add Profile</Button>
			</Grid>
		</div> );
	}
}
