import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
export default class ObliqueComponent extends Component {
	constructor() {
		super();
		this.state = {
			firstName: undefined,
			lastName: undefined,
			sex: undefined,
			age: undefined,
			isLoading: false
		}
	}
	componentDidMount() {
		this
			.callApi()
			.then( res => {
				console.log( res[ 0 ].firstName )
				this.setState( { firstName: res[ 0 ].firstName, isLoading: false, } );
			} )
			.catch( err => console.log( err ) );
	}

	callApi = async () => {
		const response = await fetch( '/api/profile' );
		const body = await response.json();
		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;
	};
	render() {
		if ( this.state.advice !== null ) {
			return ( <div className="cards cards_flipped">
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<h1 className="result">{this.state.firstName}</h1>
				</Grid>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
