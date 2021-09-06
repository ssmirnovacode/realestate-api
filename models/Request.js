const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema ({
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
    province: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    streetnum: {
        type: String,
        required: true
    },
    deal: {
        type: String,
        required: true
    },
    door: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('Request', requestSchema);