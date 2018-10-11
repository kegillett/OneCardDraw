import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import 'typeface-roboto';
///nav stuff below
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class AppHeaderBar extends Component {

	render() {

		return ( <div>
			<AppBar position="static" color="default">
				<Toolbar className='toolbar'>
					<Grid container={true} direction="row" justify="space-between" alignItems="center">
						<Button className="Nav-btn" color="inherit" to="/" component={Link}>Home</Button>
						<Typography variant="title" color="inherit" gutterBottom={false}>
							One Card Draw
						</Typography>
					</Grid>
				</Toolbar>
			</AppBar>
		</div> );
	}
}
