import React, { Component } from 'react';
export default class StrategiesComponent extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			isLoading: false,
		}
	}
	// componentDidMount() {
	// 	console.log( "here" );
	// 	this
	// 		.callApi()
	// 		.then( res => {
	// 			console.log( res )
	// 			this.setState( {
	// 				...res,
	// 				isLoading: false,
	// 			} );
	// 		} )
	// 		.catch( err => console.log( err ) );
	// }
	//
	// callApi = async () => {
	// 	const response = await fetch( '/express_backend' );
	// 	const body = await response.json();
	// 	if ( response.status !== 200 )
	// 		throw Error( body.message );
	// 	return body;
	// };
	render() {
		return ( <h1>StrategiesComponent triggered</h1> )
	}
}
