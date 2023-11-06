const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs')

const Config = require('./Config.json')
const Colors = require("./Module/Colors")
const connection = require('./Database');

const TokenModule = require('./Module/TokenModule')
const tokenModule = new TokenModule();
// =====================

const Router_Auth = require('./Router/Auth/Auth')

// =====================

app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

const SECRET_KEY = 'PeletOff';

// =====================

app.use('/auth', Router_Auth)

// =====================

app.get('', (req, res) => {
    res.send(`Hello World`)
})

app.get('/test', (req, res) => {

    function generateUID() {
        const timestamp = Date.now().toString(); // Get the current timestamp as a string
        const randomNum = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 10000
        const uid = timestamp + randomNum; // Concatenate the timestamp and random number
        return uid;
    }

    const data = {
        Username: "momahi",
        timestamp: new Date(),
        Rank: "Owner",
        UID: generateUID(),
        Token: tokenModule.CreateNewToken("momahi", "Owner", null),
        Results: tokenModule.CheckToken(tokenModule.CreateNewToken("momahi", "Owner", null))
    }

    // Convert loginData object to a string
    const logString = JSON.stringify(data);

    // Write logString to a text file
    fs.appendFile('login.json', logString, (err) => {
        if (err) throw err;
        console.log('Login information has been appended to login.log');
    });

    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(data, null, 2));

})

app.use('/images', express.static(path.join(__dirname, 'images')));

// =====================

app.listen(Config.ServerPort, () => {

    console.log(Colors.Cyan + ` Server Run at http://localhost:${Config.ServerPort} ` + Colors.Reset);

})
