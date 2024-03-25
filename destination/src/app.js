require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();


const Router = require('./routes');

app.use(express.json());
app.use(cors());




app.use('/api/v1/destination', Router);


app.get('/', (req, res,next) => {
    try{
        res.status(200).send('Welcome to the Destination API!');
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message: 'Error in destination server'});
    }
    
});

module.exports = app;









