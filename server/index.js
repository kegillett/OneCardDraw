const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const PORT = process.env.PORT || 5432;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( path.join( __dirname, '../public' ) ) )
// app.use(express.static(path.resolve(__dirname, '../public')))
app.use( bodyParser.json() );


// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/oneCardAPI',{ useNewUrlParser: true })

mongoose.connect( 'mongodb://localhost:27017/oneCardAPI', { useNewUrlParser: true } );

router.use(function (req, res, next) {
  console.log('Its being used')
  next();
  })

router.get('/', function (req, res) {
  res.json( {
    message: 'We can get hamburgerz'
  })
})

const profileRoutes = require('./routes/profileRoutes.js')
profileRoutes(router)



//test route
app.use('/api', router);

app.listen(PORT)
console.log(`we here at  ${PORT}`)