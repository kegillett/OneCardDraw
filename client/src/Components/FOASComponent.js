import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
export default class FOASComponent extends Component {
	constructor() {
		super();
		this.state = {
			message: null,
			subtitle: null,
			isLoading: false,
		}
	}
	componentDidMount() {
		this
			.callApi()
			.then( res => {
				this.setState( { message: res.message, subtitle: res.subtitle, isLoading: false, } );
			} )
			.catch( err => console.log( err ) );
	}

	callApi = async () => {
		const response = await fetch( 'http://foaas.com/programmer/me', {
			headers: {
				'Accept': 'application/json'
			}
		} );
		const body = await response.json();
		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;
	};
	render() {
		if ( this.state.message !== null ) {
			return ( <div className="cards cards_flipped">
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<h1 >{this.state.message}</h1>
					<h3 >{this.state.subtitle}</h3>
				</Grid>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
