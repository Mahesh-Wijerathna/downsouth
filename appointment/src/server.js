require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 10005;

const app = require('./app');

mongoose.connect(   
    process.env.MONGO_URL,
    {}).then(result => {
        console.clear();
        console.log('Connected to MongoDB Appointment Database');
        app.listen(port,() => {
            console.log(`Appointment Server is running on port ${port}`);
        });
    }).catch(err => {
        console.log(err);
    });