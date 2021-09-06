const express = require('express');
const router = express.Router();
const homesController = require('../controllers/homesController');

router.get('/sale', homesController.getSaleItems);

router.get('/rent', homesController.getRentItems);

router.get('/properties/:itemId', homesController.getHomeById)

module.exports = router;