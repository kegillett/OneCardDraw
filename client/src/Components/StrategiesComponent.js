import React, { Component } from 'react';
export default class StrategiesComponent extends Component {
	constructor() {
		super();
		this.state = {
			strategy: null,
			isLoading: false,
		}
	}
	componentDidMount() {
		//make an API call to '/api/strategies',we have to make request through backend
		this
			.callApi()
			.then( res => {
				console.log( res );
				//assign result to strategy state
				this.setState( { strategy: res.strategy, isLoading: false } );
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
			return ( <div className="cards cards_flipped outside_api">
				<h1>{this.state.strategy}</h1>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
