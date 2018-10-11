import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
export default class StrategiesComponent extends Component {
	constructor() {
		super();
		this.state = {
			strategy: null,
			isLoading: false
		}
	}
	componentDidMount() {
		console.log( "mount" );
		this
			.callApi()
			.then( res => {
				console.log( res );
				this.setState( { strategy: res.strategy, isLoading: false, } );
			} )
			.catch( err => console.log( err ) );
	}
	callApi = async () => {
		const response = await fetch( '/api/strategies' );

		const body = await response.json();
		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;
	};
	render() {
		if ( this.state.strategy !== null ) {
			return ( <div className="cards cards_flipped">
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<h1 className="result">{this.state.strategy}</h1>
				</Grid>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
