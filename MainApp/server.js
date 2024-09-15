const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const axios = require("axios")
const app = express();
const FormData = require("form-data");
const User = require('./db/auth');
const { uuid } = require('uuidv4');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.json());

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `http://localhost:5000`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};

app.use(allowCrossDomain)

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
    
// Define the POST endpoint to handle file upload
app.post('/pleaseUseAsIntended', upload.single('file'), async (req, res) => {
    try {
        console.log(req.cookies)
        console.log('File received:', req.file);
      
        const form = new FormData();
        form.append('file', req.file.buffer, { filename: req.file.originalname });

        console.log(form)
        
        const response = await axios.post('http://localhost:6000/upload', form, {
            headers: {
                ...form.getHeaders()
            }
        });

        // console.log(response)
      
        res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
      console.error('Error processing file:', error);
      res.status(500).json({ message: 'An error occurred while processing the file' });
    }
});

app.post("/profileSummary", async (req, res) => {
    console.log(req.body.resumeData)
    var result = await User.updateOne({userID: "93fb5b8b-a522-4e02-a8e9-3d3043e22f89"}, {$set: { resume: req.body.resumeData } })
    res.status(200).send()
    if (!result.details) {
        const response = await axios.post('http://localhost:6000/extract_info', {"resume_text": req.body.resumeData});
    }
})


app.post("/extractedData", async (req, res) => {
    console.log(req.body)
    await User.updateOne({userID: "93fb5b8b-a522-4e02-a8e9-3d3043e22f89"}, {$set: { details: req.body.data } })
    return res.status(200).send(true)
})

app.post("/handleAuth", async (req, res) => {
    console.log("handling auth request")
    console.log(req.cookies)
    const data = req.body

    if (req.body.type == "register") {
        console.log("type is register")
        const exists = await User.findOne({email: data.email})
        console.log("Already exists")
        if (exists) return res.status(400).send("User already exists!")

        data.userID = uuid()
        const userDoc = new User({...data})
        await userDoc.save()
        if (userDoc) {
            res.cookie("id", userDoc.userID)
            return res.status(200).send(true)
        } else {
            return res.status(400).send(false)
        }
    } else {
        const exists = await User.findOne({email: data.email, password: data.password})
        if (exists) {
            res.cookie("id", userDoc.userID)
            return res.status(200).send(true)
        } else {
            return res.status(400).send(false)
        }
    }

    res.status(200).send()
})

app.get("/getProfile", async (req, res) => {
    console.log("get profile!")
    const exists = await User.findOne({userID: "93fb5b8b-a522-4e02-a8e9-3d3043e22f89"})
    if (exists.details) {
        return res.status(200).json({details: exists.details})
    } else {
        return res.status(400).send(false)
    }
})

    // Serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/src/index.js'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));