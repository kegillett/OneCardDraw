import React, { Component } from 'react';
export default class AdviceComponent extends Component {
	constructor() {
		super();
		this.state = {
			advice: null,
			isLoading: false,
		}
	}
	componentDidMount() {
		//make an API call to the http://api.adviceslip.com/advice'
		this
			.callApi()
			.then( res => {
				//assign result to the advice state
				this.setState( { advice: res.slip.advice, isLoading: false, } );
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
			return ( <div className="cards cards_flipped outside_api">
				<h1 className="result">{this.state.advice}</h1>
			</div> )
		} else {
			return ( <div className="cards cards_flipped outside_api">
				<h1 className="result">At this point of time no advice is available for you.</h1>
			</div> )
		}
	}
}
