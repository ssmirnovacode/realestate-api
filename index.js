const express = require('express');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

//CORS policy
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message });
});

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('server is running');
    app.listen(PORT);
})
.catch(err => console.log(err))
