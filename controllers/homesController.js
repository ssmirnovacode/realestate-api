const Home = require('../models/Home');

exports.getSaleItems = (req,res,next) => {
    Home.find({ deal: 'sale'})
    .then(items => {
        res.json({ items });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
};

exports.getRentItems = (req,res,next) => {
    Home.find({ deal: 'rent'})
    .then(items => {
        res.json({ items });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
};

exports.getHomeById = (req,res,next) => {
    const itemId = req.params.itemId;

    Home.findById(itemId)
    .then(item => {
        if (!item) {
            const error = new Error('Could not find post');
            error.statusCode = 404;
            throw error;
        }
        res.json({
            item
        })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
}