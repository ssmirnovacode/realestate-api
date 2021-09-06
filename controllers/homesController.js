const Home = require('../models/Home');

exports.getSaleItems = (req,res,next) => {
    Home.find({ deal: 'sale'})
    .then(items => {
        res.json({ items })
    })
    .catch(err => {
        
    })
}