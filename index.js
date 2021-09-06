const express = require('express');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('server is running');
    app.listen(PORT);
})
.catch(err => console.log(err))
