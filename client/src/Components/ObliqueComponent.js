import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
export default class ObliqueComponent extends Component {
	constructor() {
		super();
		this.state = {
			age: undefined,
			bio: undefined,
			firstName: undefined,
			lastName: undefined,
			location: undefined,
			photoURL: undefined,
			isLoading: false
		}
	}
	componentDidMount() {
		this
			.callApi()
			.then( res => {
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
		console.log( this.state )
		if ( this.state.advice !== null ) {
			return ( <div className="cards cards_flipped" onClick={this.props.onClick}>
				<Grid container={true} direction="column" justify="center" alignItems="center">
					<img className='profileImg' src={this.state.photoURL} alt="#"/>
					<h1 className="result">{this.state.firstName}</h1>
				</Grid>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
