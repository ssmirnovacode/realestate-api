const express = require('express');
const router = express.Router();
const homesController = require('../controllers/homesController');

router.get('/sale-items', homesController.getSaleItems);

module.exports = router;