require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 10002;

const app = require('./app');

mongoose.connect(
    process.env.MONGO_URL,
    {}).then(result => {
        console.log('Connected to MongoDB Tourist Database');
        app.listen(port,() => {
            console.log(`Tourist Server is running on port ${port}`);
        });
    }).catch(err => {
        console.log(err);
    });