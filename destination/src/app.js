require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();


const Router = require('./routes');

app.use(express.json());
app.use(cors());




app.use('/api/v1/destination', Router);


app.get('/', (req, res,next) => {
    res.status(200).send('Welcome to the Destination API!');
});

module.exports = app;









