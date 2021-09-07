const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.send('<h1>REST API for MYrealestate web app</h1><h3>Endpoints available:</h3><a href="/properties/sale">GET properties for sale</a><br/><a href="/properties/rent">GET properties for rent</a><br/><a href="/properties/itemId">GET property details (put property id instead of itemId in the link) </a><br/><a href="/feedback">GET all reviews</a><br/><a href="/feedback">POST a review</a><br/><a href="/send-request">POST a request with a property to sell</a><br/><a href="/contact">POST a request to contact the agency for more information</a><br/>');
});

module.exports = router;