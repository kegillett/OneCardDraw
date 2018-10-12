import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto';
///nav stuff below
import Grid from '@material-ui/core/Grid';
// import CardMedia from '@material-ui/core/CardMedia';
import ObliqueComponent from './ObliqueComponent';
import StrategiesComponent from './StrategiesComponent';
import FOASComponent from './FOASComponent';
import AdviceComponent from './AdviceComponent';
// const card = require( '../images/back_of_the_card.jpg' );

export default class Cards extends Component {
	constructor() {
		super();
		this.state = {
			isObliqueClicked: false,
			isStrategiesClicked: false,
			isFOASClicked: false,
			isAdviceClicked: false,
		}
	}
	setClickedState = ( e ) => {
		this.setState( {
			[ `is${ e.target.id }Clicked` ]: true
		} );
	}

	render() {
		return ( <div className="mainContent">
			<Grid container={true} direction="row" justify="center" alignItems="center">
				{
					this.state.isObliqueClicked
						? <ObliqueComponent/>
						: <div onClick={this.setClickedState} id='Oblique' className="cards cards_initial">
								<h1>Oblique Identity</h1>
							</div>
				}{
					this.state.isStrategiesClicked
						? <StrategiesComponent/>
						: <div onClick={this.setClickedState} id='Strategies' className="cards cards_initial">
								<h1>Strategies</h1>
							</div>
				}{
					this.state.isFOASClicked
						? <FOASComponent/>
						: <div onClick={this.setClickedState} id='FOAS' className="cards cards_initial">
								<h1>FOAS</h1>
							</div>
				}{
					this.state.isAdviceClicked
						? <AdviceComponent/>
						: <div onClick={this.setClickedState} id='Advice' className="cards cards_initial">
								<h1>Advice</h1>
							</div>
				}
			</Grid>
		</div> );
	}
}
