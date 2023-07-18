// Create web server

// Import express
const express = require('express');
// Import body parser
const bodyParser = require('body-parser');
// Import mongoose
const mongoose = require('mongoose');
// Import cors
const cors = require('cors');
// Import logger
const logger = require('morgan');
// Import path
const path = require('path');
// Import dotenv
const dotenv = require('dotenv').config();

// Import routes
const apiRoutes = require('./routes/api');

// Initialize express
const app = express();

// Set port
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Connected to MongoDB');
    }
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use cors
app.use(cors());

// Use logger
app.use(logger('dev'));

// Use routes
app.use('/api', apiRoutes);

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));