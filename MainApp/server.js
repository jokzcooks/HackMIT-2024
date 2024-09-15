const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const axios = require("axios")
const app = express();
const FormData = require("form-data")

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.json());

const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB)
    .then( () => console.log('Connected to MongoDB'))
    .catch(err => console.log('Connection error:', err));


var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
    
// Define the POST endpoint to handle file upload
app.post('/pleaseUseAsIntended', upload.single('file'), async (req, res) => {
    try {
        console.log('File received:', req.file);
      
        const form = new FormData();
        form.append('file', req.file.buffer, { filename: req.file.originalname });

        console.log(form)
        
        const response = await axios.post('http://localhost:6000/upload', form, {
            headers: {
                ...form.getHeaders()
            }
        });

        console.log(response)
      
        res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
      console.error('Error processing file:', error);
      res.status(500).json({ message: 'An error occurred while processing the file' });
    }
});

    // Serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/src/index.js'));
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));