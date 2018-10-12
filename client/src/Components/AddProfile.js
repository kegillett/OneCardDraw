import React, { Component } from 'react';
import '../App.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class AddProfile extends Component {
	constructor() {
		super();
		this.state = {
			photoURL: undefined,
			firstName: undefined,
			lastName: undefined,
			age: undefined,
			sex: undefined,
			location: undefined,
			bio: undefined,
		}
	}

	handleChange = ( e ) => {
		if ( e.target.id !== 'photoURL' ) {
			this.setState( {
				[ `${ e.target.id }` ]: e.target.value
			} );
		} else if ( e.target.id === 'photoURL' ) {
			this.setState( { photoURL: e
					.target
					.files[ 0 ] } )
		}
	}

	clickHandler = () => {
		console.log( this.state.photoURL.name )
		const formData = new FormData();
		Object
			.keys( this.state )
			.forEach( key => {
				if ( key !== 'photoURL' ) 
					formData.append( key, this.state[ key ] )
				else {
					formData.append( key, this.state[key], this.state[ key ][ 'name' ] )
				}
			} );

		fetch( '/api/profile', {
			method: 'POST',
			body: formData,
		} ).then( ( res ) => {
			res.json();
		} )
	}
	render() {
		return ( <div className="mainContent form">
			<form noValidate="noValidate" autoComplete="off">
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<TextField className="profile_info" id="firstName" label="First Name" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" id="lastName" label="Last Name" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<input className="profile_info" type="file" id='photoURL' onChange={this.handleChange} required={true}/>
					<TextField className="profile_info" id="age" label="Age" onChange={this.handleChange} type="number" margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" id="sex" label="Sex" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" id="location" label="Location" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" rowsMax="4" id="bio" label="Biography" multiline={true} onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<Button onClick={this.clickHandler}>Submit</Button>
				</Grid>
			</form>
		</div> );
	}
}
