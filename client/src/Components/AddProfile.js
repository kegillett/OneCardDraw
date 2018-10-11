import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import Grid from '@material-ui/core/Grid';
// import { Link } from 'react-router-dom';
// const axios = require( 'axios' );
export default class AddProfile extends Component {
	constructor() {
		super();
		this.state = {
			file: undefined,
			firstName: undefined,
			lastName: undefined,
			age: undefined,
			sex: undefined,
			location: undefined,
			bio: undefined
		}
	}

	handleChange = ( e ) => {
		if ( e.target.id !== 'file' ) {
			this.setState( {
				[ `${ e.target.id }` ]: e.target.value
			} );
		} else if ( e.target.id === 'file' ) {
			this.setState( { file: e
					.target
					.files[ 0 ] } )
		}
	}
	clickHandler = () => {
		console.log( this.state )
		// fetch( '/api/profile', {
		// 	method: 'POST',
		// 	body: JSON.stringify( this.state ),
		// } )
		// 	.then( ( res ) => res.json() )
		// 	.then( ( body ) => {
		// 		console.log( body );
		// 	} );
	}
	render() {
		return ( <div className="mainContent form">
			<form noValidate="noValidate" autoComplete="off">
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<TextField id="firstName" label="First Name" onChange={this.handleChange} margin="normal" variant="outlined"/>
					<TextField id="lastName" label="Last Name" onChange={this.handleChange} margin="normal" variant="outlined"/>
					<input type="file" id='file' onChange={this.handleChange}/>
					<TextField id="age" label="Age" onChange={this.handleChange} type="number" margin="normal" variant="outlined"/>
					<TextField id="sex" label="Sex" onChange={this.handleChange} margin="normal" variant="outlined"/>
					<TextField id="location" label="Location" onChange={this.handleChange} margin="normal" variant="outlined"/>
					<TextField rowsMax="4" id="bio" label="Biography" multiline={true} onChange={this.handleChange} margin="normal" helperText="Put some info about yourself" variant="outlined"/>
					<Button onClick={this.clickHandler}>Submit</Button>
				</Grid>
			</form>
		</div> );
	}
}
