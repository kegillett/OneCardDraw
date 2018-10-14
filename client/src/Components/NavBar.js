import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto';
///nav stuff below
import {
	AppBar,
	Button,
	Toolbar,
	Grid,
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core';
import { Link } from 'react-router-dom';
const theme = createMuiTheme( {
	overrides: {
		MuiButton: { // Name of the component ⚛️ / style sheet
			root: { // Name of the rule
				width: '80px',
				height: '30px',
				textTransform: 'uppercase',
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
						</MuiThemeProvider>
					</Grid>
				</Toolbar>
			</AppBar>
		</div> );
	}
}
