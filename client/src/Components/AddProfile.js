import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import {
	TextField,
	Button,
	Grid,
	MuiThemeProvider,
	createMuiTheme,
} from '@material-ui/core';
//ovveride of standard MUI theme for button
const theme = createMuiTheme( {
	overrides: {
		MuiButton: { // Name of the component ⚛️ / style sheet
			root: { // Name of the rule
				width: '80px',
				height: '30px',
				marginTop: '2%',
				marginLeft: '3%',
				textTransform: 'uppercase',
				background: 'linear-gradient(to bottom right, #1565C0, #7C4DFF)',
				boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', } }
	}
} );
//style for upload button and hidden input
const styles = theme => ( {
	input: {
		display: 'none'
	}
} );
class AddProfile extends Component {
	constructor() {
		super();
		this.state = {
			photoURL: undefined,
			fileName: "File Name",
			firstName: undefined,
			lastName: undefined,
			age: undefined,
			sex: undefined,
			location: undefined,
			bio: undefined
		}
	}
	//keep track of changes in text fields
	handleChange = ( e ) => {
		if ( e.target.id !== 'photoURL' ) {
			this.setState( {
				[ `${ e.target.id }` ]: e.target.value
			} ); //if we uploading photo
		} else if ( e.target.id === 'photoURL' ) {
			//set photo information to photoURL state
			this.setState( { photoURL: e
					.target
					.files[ 0 ] } )
			// set name of the uploaded image to state file name
			this.setState( { fileName: e
					.target
					.files[ 0 ][ 'name' ] } )
		}
	}
	//After Submit button was pressed
	clickHandler = () => {
		//create formData
		const formData = new FormData();
		//loop through all keys of the state
		Object
			.keys( this.state )
			.forEach( key => {
				//skip 'photoURL' and 'fileName' states
				if ( key !== 'photoURL' && key !== 'fileName' ) 
					//add to the formData
					formData.append( key, this.state[ key ] )
					//if this is 'photoURL'state
				else if ( key === 'photoURL' ) {
					//add information to the formData by passing key name,information about
					//file and then file name
					formData.append( key, this.state[key], this.state[ key ][ 'name' ] )
				}
			} );
		//make an API POST call to create new profile
		fetch( '/api/profile', {
			//select method
			method: 'POST',
			//attach formData to the body
			body: formData
		} ).then( ( res ) => {
			res.json( "file sent" );
		} )
	}
	render() {
		//creat const classes to use our styling
		const { classes } = this.props
		return (
		//form for new profile
		<div className="mainContent form">
			<form noValidate="noValidate" autoComplete="off">
				{/* Grid to make all fields be centered in one column */}
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<TextField className="profile_info" id="firstName" label="First Name" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" id="lastName" label="Last Name" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<div className="profile_info upload">
						<TextField className="profile_info" id="fileName" label={this.state.fileName} disabled={true} variant="outlined"/> {/* hidden input for file upload */}
						<input accept="image/*" className={classes.input} type="file" id='photoURL' onChange={this.handleChange} required={true}/> {/* label that is connecting input and pressed button */}
						<MuiThemeProvider theme={theme}>
							<label htmlFor="photoURL">
								<Button variant="outlined" component="span" className={classes.button}>Upload</Button>
							</label>
						</MuiThemeProvider>
					</div>
					<TextField className="profile_info" id="age" label="Age" onChange={this.handleChange} type="number" margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" id="sex" label="Sex" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" id="location" label="Location" onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<TextField className="profile_info" rowsMax="4" id="bio" label="Biography" multiline={true} onChange={this.handleChange} margin="normal" variant="outlined" required={true}/>
					<div>
						<MuiThemeProvider theme={theme}>
							<Button id="submit_btn" onClick={this.clickHandler}>Submit</Button>
						</MuiThemeProvider>
					</div>
				</Grid>
			</form>
		</div>);
	}
}

export default withStyles( styles )( AddProfile )
