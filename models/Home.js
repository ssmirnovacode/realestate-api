const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    comarca: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    surface: {
        type: Number,
        required: true
    },
    deal: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    images: {
        type: Array
    }
});

module.exports = mongoose.model('Home', homeSchema);