const express = require('express');
const router = express.Router();
const homesController = require('../controllers/homesController');

router.get('/sale-items', homesController.getSaleItems);

router.get('/rent-items', homesController.getRentItems);

module.exports = router;