import React, { Component } from 'react';
import { Grid, TextField, } from '@material-ui/core';
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
			sex: undefined,
			isLoading: false,
			isAllStates: false,
		}
	}
	componentDidMount() {
		this
			.callApi()
			.then( res => {
				this.setState( {
					...res,
					isLoading: false,
					isAllStates: true,
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
		const b = ( props ) => <p style={{
				fontWeight: 'bold'
			}}>{props.children}</p>
		if ( this.state.isAllStates === true ) {
			return ( <div className="cards cards_flipped">
				<Grid container={true} direction="column" justify="space-around" alignItems="center">
					<img className='profileImg' src={this.state.photoURL} alt="#"/>
					<h2 className='card_margin'>{`${ this.state.firstName} ${ this.state.lastName }`}</h2>
					<Grid container={true} direction="column" justify="flex-end" alignItems="center">
						<div className="card_info">
							<Grid className="card_margin" container={true} direction="row" justify="space-evenly" alignItems="center">
								<p className="card_margin">
									<b>Age:</b>{` ${ this.state.age }`}</p>
								<p className="card_margin">
									<b>Sex:</b>{` ${ this.state.sex }`}</p>
							</Grid>
							<p className="card_margin">
								<b>Location:</b>{` ${ this.state.location }`}</p>
							<TextField rowsMax="4" id="bio" value={this.state.bio} multiline={true}/>
						</div>
					</Grid>
				</Grid>
			</div> )
		} else {
			return ( <div className="cards cards_flipped"></div> )
		}
	}
}
