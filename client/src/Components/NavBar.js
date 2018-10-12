import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import 'typeface-roboto';
///nav stuff below
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme, } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const theme = createMuiTheme( {
	overrides: {
		MuiButton: { // Name of the component ⚛️ / style sheet
			root: { // Name of the rule
				// border: #101935;
				// border - width: medium;
				background: 'linear-gradient(to bottom right, #1565C0, #7C4DFF)',
				boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' } }
	}
} );
export default class AppHeaderBar extends Component {

	render() {

		return ( <div>
			<AppBar position="static" color="default">
				<Toolbar className='toolbar'>
					<Grid container={true} direction="row" justify="space-between" alignItems="center">
						<MuiThemeProvider theme={theme}>
							<Button className="Nav-btn" color="inherit" to="/" component={Link}>Home</Button>
							<h1>One Card Draw</h1>
							{/* <Typography variant="title" color="inherit" gutterBottom={false}>
								One Card Draw
							</Typography> */
							}
						</MuiThemeProvider>
					</Grid>
				</Toolbar>
			</AppBar>
		</div> );
	}
}
