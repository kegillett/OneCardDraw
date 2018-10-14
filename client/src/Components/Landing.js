import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
//ovveride of standard MUI theme for button
const theme = createMuiTheme( {
	overrides: {
		MuiButton: { // Name of the component ⚛️ / style sheet
			root: { // Name of the rule
				background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
				borderRadius: 100,
				width: '200px',
				height: '200px',
				boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', } }
	}
} );
export default class Landing extends Component {
	render() {
		return ( <div className="mainContent">
			<Grid container={true} direction="row" justify="space-evenly" alignItems="center">
				<MuiThemeProvider theme={theme}>
					<Button color="inherit" size="large" to="/cards" component={Link}>Cards</Button>
					<Button color="inherit" size="large" to="/addProfile" component={Link}>Add Profile</Button>
				</MuiThemeProvider>
			</Grid>
		</div> );
	}
}
