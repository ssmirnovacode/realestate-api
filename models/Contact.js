const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    },
    itemId: String
},
{ timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);