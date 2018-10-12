import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
export default class ObliqueComponent extends Component {
	constructor() {
		super();
		this.state = {
			file: undefined,
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
				console.log( res )
				this.setState( {
					...res,
					isLoading: false
				} );
			} )
			.catch( err => console.log( err ) );
	}

	callApi = async () => {
		const response = await fetch( '/api/random' );
		const body = await response.json();
		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;
	};
	render() {
		console.log( this.state.file )
		if ( this.state.advice !== null ) {
			return ( <div className="cards cards_flipped">
				<Grid container={true} direction="column" justify="center" alignItems="center">
					{/* <img src={this.state.file.name} alt="#"/> */}
					<h1 className="result">{this.state.firstName}</h1>
				</Grid>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
