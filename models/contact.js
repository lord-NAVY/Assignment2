let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    Name: String,
    Phone: String,
    Email: String
},
    {
        collection: "contacts"
    });

module.exports = mongoose.model('Contact', contactsModel);