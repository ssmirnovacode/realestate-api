const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

const homeRoutes = require('./routes/homeRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const requestRoutes = require('./routes/requestRoutes');
const indexRoutes = require('./routes/indexRoutes');

const app = express();

app.use(express.json());

app.use(express.static(path.join('public')));

app.use(indexRoutes);
app.use('/properties', homeRoutes);
app.use(feedbackRoutes);
app.use(requestRoutes);

app.use((req,res,next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

//error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message });
});

mongoose.connect(MONGODB_URI)
.then(() => {
    //console.log('server is running');
    app.listen(PORT);
})
.catch(err => console.log(err))
