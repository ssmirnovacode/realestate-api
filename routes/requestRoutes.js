const express = require('express');
const router = express.Router();
const requestsController = require('../controllers/requestsController');

router.post('/send-request', requestsController.postRequest);

module.exports = router;