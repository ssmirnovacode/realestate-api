const Request = require('../models/Request');

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
            message: 'Request submitted correctly'
        })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500; 
        }
        next(err); 
    })
}