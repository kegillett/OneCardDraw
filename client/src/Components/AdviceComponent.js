import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
export default class AdviceComponent extends Component {
	constructor() {
		super();
		this.state = {
			advice: null,
			isLoading: false
		}
	}
	componentDidMount() {
		this
			.callApi()
			.then( res => {
				this.setState( { advice: res.slip.advice, isLoading: false } );
			} )
			.catch( err => console.log( err ) );
	}

	callApi = async () => {
		const response = await fetch( 'http://api.adviceslip.com/advice' );
		const body = await response.json();
		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;
	};
	render() {
		if ( this.state.advice !== null ) {
			return ( <div className="cards cards_flipped">
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<h1 className="result">{this.state.advice}</h1>
				</Grid>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
