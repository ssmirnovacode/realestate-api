const Feedback = require('../models/Feedback');

exports.getFeedback = (req,res,next) => {
    Feedback.find()
    .then(reviews => {
        res.json({ reviews })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
};

exports.postFeedback = (req,res,next) => {
    const author = req.body.author;
    const text = req.body.text;

    const feedback = new Feedback({ author, text });
    feedback.save()
    .then(() => {
        res.json({
            message: 'Review saved!'
        })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
};