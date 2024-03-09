require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');


const app = express();

const Router = require('./routes');

app.use(express.json());

app.use(fileUpload());

app.use('/uploads/products', express.static('public/products'))

app.use('/api/v1/m_center', Router);

app.get('/', (req, res,next) => {
    res.send('Welcome to the M_Center API!');
});

module.exports = app;