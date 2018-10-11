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
const card = require( '../images/back_of_the_card.jpg' );

export default class Cards extends Component {
	constructor() {
		super();
		this.state = {
			buttonClicked: "",
			Oblique: false,
			isStrategiesClicked: false,
			isFOASClicked: false,
			isAdviceClicked: false,
		}
	}
	setClickedState = ( e ) => {
		console.log( e.target.id );
		this.setState( { buttonClicked: `is${ e.target.id }Clicked` } )
		// const str = `is${ e.target.id }Clicked`;
		const updatedState = {
			e.target.id: true
		};
		this.setState( updatedState );
		console.log( this.state )
		//	console.log( `is${ e.target.id }Clicked`, this.state.buttonClicked )
	}
	getOblique = () => {
		console.log( 1 );
	}
	getStrategies = () => {
		console.log( 2 )
	}
	getFOAS = () => {
		console.log( 3 )
	}
	getAdvice = () => {
		console.log( 4 )
	}

	render() {

		return (<div>
			<Grid container={true} direction="row" justify="center" alignItems="center">
				<div onClick={this.setClickedState}>{
						this.state.isObliqueClicked
							? <ObliqueComponent/>
							: <img src={card} alt="#" className="cards" id='Oblique'/>
					}</div>
				<div onClick={this.setClickedState} id='Strategies'>{
						this.state.isStrategiesClicked
							? <StrategiesComponent/>
							: <img src={card} alt="#" className="cards"/>
					}</div>
				<div onClick={this.setClickedState} id='FOAS'>{
						this.state.isFOASClicked
							? <FOASComponent/>
							: <img src={card} alt="#" className="cards"/>
					}</div>
				<div onClick={this.setClickedState} id='Advice'>{
						this.state.isAdviceClicked
							? <AdviceComponent/>
							: <img src={card} alt="#" className="cards"/>
					}</div>
			</Grid>
			< /div>
				);
      }
      }