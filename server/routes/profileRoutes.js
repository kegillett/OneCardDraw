const multer = require( 'multer' );
const axios = require( 'axios' );
const storage = require( './storage' )
const upload = multer( { storage } );

const express = require('express');
const router = express.Router();

const Profile = require( '../models/profile' );

router.route( '/strategies' )
	.get( function ( req, res ) {
		axios
		  .get( 'http://brianeno.needsyourhelp.org/draw' )
		  .then(response => res.json( response.data ))
	})

router.route( '/random' )
	.get( function ( req, res ) {
		let tempProfile = {
			photoURL: undefined,
			firstName: undefined,
			lastName: undefined,
			age: undefined,
			sex: undefined,
			location: undefined,
			bio: undefined,
		};
		//Counts number of objects in database then perfoms a function.
		Profile
			.countDocuments()
			.exec( function ( err, count ) {
				const keyLength = Object
					.keys( tempProfile )
					.length
				let counter = 0
				//Allows for loop to work at its own pace without going further into the function until after the promise resolves.
				new Promise( ( resolve, reject ) => {
					//loops through tempProfile object (cool es6 stuff)
					for ( let key in tempProfile ) {
						//at each key in tempProfile we get a random profile from database and assign the appropriate key value to our tempProfile.
						const random = Math.floor( Math.random() * count )
						Profile
							.findOne()
							.skip( random )
							.exec( function ( err, profile ) {
								if ( err )
									res.send( err )
								tempProfile[ key ] = profile[ key ]
								//ups counter by one for every loop until it equals keyLength then resolves the promise allowing the function to continue.
								counter++
								if ( counter === keyLength )
									resolve()
							})
					}
				}).then( () => res.json( tempProfile ) );
			})
	})

router.route( '/profile' )
	.post( upload.single( 'image' ), ( req, res ) => {
		if (!req.file) {
	    return res.status(400).json({
				message: "A photo is required",
	      success: false
	    });
	  } else {
			const { file, body } = req
			const profile = new Profile();
			profile.photoURL = file.path;

			for (let key in body) {
				if (typeof body[key] !== 'undefined') {
					profile[key] = body[key];
				} else {
					return res.status(400).json({
						message: "Incorrect key for profile",
						success: false
					})
				}
			}

			profile.save(( err, profile ) => {
				if ( err ) {
					return res.send( err )
				} else {
					return res.status(200).json({
						message: "Ur prof wuz made.",
						success: true
					})
				}
			})
	  }
	})
	.get(( req, res ) => {
		Profile.find( ( err, profiles ) => {
			if ( err )
				res.send( err )
			res.json( profiles )
		} )
	})

module.exports = router
