const mongoose = require('mongoose');

const TouristSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
username: {
    // ! email is the username
    type: String,
    required: true
},
country: {
    type: String,
    required: true
},
phone_number: {
    type: String,
    required: true
}

});

module.exports = mongoose.model('Tourist', TouristSchema);




