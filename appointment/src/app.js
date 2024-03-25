require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

const Router = require('./routes');

app.use(express.json());

app.use(fileUpload());

app.use('/uploads/products', express.static('public/products'))

app.use(cors());
app.use('/api/v1/appointment', Router);

app.get('/', (req, res,next) => {
    res.send({message : "Welcome to the Appointment API!"});
});

module.exports = app;