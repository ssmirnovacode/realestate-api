const Home = require('../models/Home');

exports.getSaleItems = (req,res,next) => {
    Home.find({ deal: 'sale'})
    .then(items => {
        res.json({ items });
    })
    .catch(err => {
        console.log(err);
    })
};

exports.getRentItems = (req,res,next) => {
    Home.find({ deal: 'rent'})
    .then(items => {
        res.json({ items });
    })
    .catch(err => {
        console.log(err);
    })
};