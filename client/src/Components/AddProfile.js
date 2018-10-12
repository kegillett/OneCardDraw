import React, { Component } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'

import '../App.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class AddProfile extends Component {
	constructor() {
		super();
		this.state = {
			file: null,
			message: '',
			profile: {
				firstName: "",
				lastName: "",
				age: "",
				sex: "",
				location: "",
				bio: ""
			}
		}
	}

	handleChange = ( e ) => {
		console.log(e.target.id)
		if ( e.target.id === 'outlined-button-file' ) {
			this.setState({
				file : e.target.files[0]
			});
		} else {
			const { profile } = this.state
			profile[`${ e.target.id }`] = e.target.value
			this.setState({
				profile
			});
		}
	}


	deleteMessage = async () => {
		await setTimeout(() => {
			this.setState({
				message: ""
			})
		}, 2000);
	}

	clickHandler = () => {
		const { profile, file } = this.state
		let bodyFormData = new FormData();
		bodyFormData.append('image', file);
		for (let key in profile) {
			if (profile.hasOwnProperty(key)) {
				bodyFormData.set(key, profile[key]);
			}
		}

		axios({
	    method: 'post',
	    url: 'http://localhost:5000/api/profile',
	    data: bodyFormData,
	    config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then((r) => {
			if(r.status) {
				const { message } = r.data
				this.setState({
					message
				})
				this.deleteMessage()
			}
		})
    .catch(err => console.error(err))
	}

	render() {
		const { classes } = this.props
		return (
			<div className="mainContent form">
				<div style={{ textAlign: "center"}} >
					<p >{this.state.message}</p>
				</div>
				<form noValidate="noValidate" autoComplete="off">
					<Grid container={true} direction="column" justify="center" alignItems="center">
						<TextField id="firstName" label="First Name" onChange={this.handleChange} margin="normal" variant="outlined"/>
						<TextField id="lastName" label="Last Name" onChange={this.handleChange} margin="normal" variant="outlined"/>
						<input
			        accept="image/*"
							name="image"
			        className={classes.input}
			        id="outlined-button-file"
			        type="file"
							onChange={this.handleChange}
			      />
			      <label htmlFor="outlined-button-file">
			        <Button
								variant="outlined"
								component="span"
								className={classes.button}
							>
			          Upload
			        </Button>
			      </label>
						<TextField id="age" label="Age" onChange={this.handleChange} type="number" margin="normal" variant="outlined"/>
						<TextField id="sex" label="Sex" onChange={this.handleChange} margin="normal" variant="outlined"/>
						<TextField id="location" label="Location" onChange={this.handleChange} margin="normal" variant="outlined"/>
						<TextField rowsMax="4" id="bio" label="Biography" multiline={true} onChange={this.handleChange} margin="normal" helperText="Put some info about yourself" variant="outlined"/>
						<Button onClick={this.clickHandler}>Submit</Button>
					</Grid>
				</form>
			</div>
		);
	}
}

export default withStyles(styles)(AddProfile)
