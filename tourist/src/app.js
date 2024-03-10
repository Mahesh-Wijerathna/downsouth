require('dotenv').config();
const express = require('express');


const app = express();


const Router = require('./routes');

app.use(express.json());


app.use('/api/v1/tourists', Router);    




app.get('/', (req, res,next) => {
    res.send('Welcome to the Tourist API!');
});

module.exports = app;









