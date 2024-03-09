const mongoose = require('mongoose');

const M_CenterSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
longitude: {
    type: Number,
    required: true
},
latitude: {
    type: Number,
    required: true
},
destination : {
    type: String,
    required: true
},
    username: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('M_Center', M_CenterSchema);
