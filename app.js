const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var path = require('path');
const formData = require('express-form-data');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes/index');
const busboy = require('connect-busboy');


//Midlewares
app.use(busboy());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(formData.parse());
app.use(cors());
app.use(morgan('tiny'));

//Routes
app.use(router);


//Static
app.use('/static', express.static(path.join( __dirname, 'public')));
app.use('/uploads', express.static(path.join( __dirname, 'uploads')));

module.exports = app;