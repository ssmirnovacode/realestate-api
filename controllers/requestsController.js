const Request = require('../models/Request');
const Contact = require('../models/Contact');

exports.postRequest = (req,res,next) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const province = req.body.province;
    const zipcode = req.body.zipcode;
    const streetnum = req.body.streetnum;
    const door = req.body.door;
    const deal = req.body.deal;
    const comments = req.body.comments;

    const data = new Request({ name, lastname, email, phone, province, zipcode, streetnum, door, deal, comments});
    data.save()
    .then(() => {
        res.json({
            message: 'Thank you for your request. We will contact you shortly'
        })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
};

exports.postContact = (req,res,next) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const comments = req.body.comments;
    const itemId = req.body.itemId;

    const data = new Contact({ name, lastname, email, phone, comments, itemId });
    data.save()
    .then(() => {
        res.json({
            message: 'Thank you for your message. We will contact you shortly'
        })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
}