const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
//falopa
const app = express();
const router = require('./routes/index');

//Midlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//Routes
app.use(router);

module.exports = app;