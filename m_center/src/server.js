require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 10003;

const app = require('./app');

mongoose.connect(
    process.env.MONGO_URL,
    {}).then(result => {
        console.log('Connected to MongoDB Medical Center Database');
        app.listen(port,() => {
            console.log(`Medical Center Server is running on port ${port}`);
        });
    }).catch(err => {
        console.log(err);
    });