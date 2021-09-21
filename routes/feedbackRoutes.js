const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { check } = require('express-validator');

router.get('/feedback', feedbackController.getFeedback);

router.post('/feedback', [
    check('author').trim().isString().isLength({ min: 3, max: 20 }).withMessage('Author name must be 3-20 characters long'),
    check('text').trim().isString().isLength({ min: 5, max: 1000 }).withMessage('Review must be 5-1000 characters long'),
], feedbackController.postFeedback);

module.exports = router;