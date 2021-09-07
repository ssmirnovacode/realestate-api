const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.send('<h1>REST API for MYrealestate web app</h1>');
    res.send('<h3>Endpoints available:</h3>');
    res.send('<a href="/properties/sale">GET properties for sale</a><br/>');
    res.send('<a href="/properties/rent">GET properties for rent</a><br/>');
    res.send('<a href="/properties/itemId">GET property details (put property id instead of itemId in the link) </a><br/>');
    res.send('<a href="/feedback">GET all reviews</a><br/>');
    res.send('<a href="/feedback">POST a review</a><br/>');
    res.send('<a href="/send-request">POST a request with a property to sell</a><br/>');
    res.send('<a href="/contact">POST a request to contact the agency for more information</a><br/>');
});

module.exports = router;