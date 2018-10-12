const express = require( 'express' )
const path = require( 'path' )
const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 5000
const IMG = {
	local: '../profileImgs',
	hosted: '/profileImgs'
}
const app = express();
const router = express.Router();

const profileRoutes = require( './routes/profileRoutes.js' )

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( cors() )
app.use( morgan('dev') );

app.use( express.static( path.join( __dirname, '../public' ) ) )
app.use( IMG.hosted, express.static( path.join( __dirname, IMG.local ) ) )

mongoose.connect( 'mongodb://localhost:27017/oneCardAPI', { useNewUrlParser: true } )

router.use( ( req, res, next ) => {
	console.log( 'Middleware console log' )
	next();
} )

router.get( '/', ( req, res ) => {
	res.json( { message: 'Router is working' } )
})

app.use( '/api', router )
app.use( '/api', profileRoutes)

app.listen( PORT, () => {
	console.log(`we are here at ${ PORT }`)
})
