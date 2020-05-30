const path = require('path');
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js');
const aylien = require("aylien_textapi");
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

dotenv.config();
const app = express()
app.use(cors());


// console.log(`Your API key is ${process.env.API_KEY}`);
// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

// console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`The server is running on http://localhost:${port}`);
})

app.post('/input', (req, res) => {
    
    textapi.sentiment({
        'url': req.body.content
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
    })
})  