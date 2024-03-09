const mongoose = require('mongoose');

const TouristSchema = new mongoose.Schema({
username: {
    type: String,
    required: true
},
// Image: {
//     type: String,
//     required: true
// },
password: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Tourist', TouristSchema);




