const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.json());

const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB)
    .then( () => console.log('Connected to MongoDB'))
    .catch(err => console.log('Connection error:', err));

// Serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/src/index.js'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));