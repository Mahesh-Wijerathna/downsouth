require('dotenv').config();
const express = require('express');


const app = express();


const Router = require('./routes');

app.use(express.json());





app.use('/api/v1/auth', Router);    




app.get('/', (req, res,next) => {
    res.send('Welcome to the Auth API!');
});

module.exports = app;









