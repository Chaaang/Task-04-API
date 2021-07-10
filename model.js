const mongoose = require('mongoose');

const model = mongoose.Schema({
    firstname : {
        type: String
    },
    lastname : {
        type: String
    },
    phonenumber : {
        type : String
    }
});

module.exports = mongoose.model('phonebook', model);