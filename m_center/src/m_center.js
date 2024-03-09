const mongoose = require('mongoose');

const M_CenterSchema = new mongoose.Schema({
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
