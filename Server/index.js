const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    const data = {
        Username: "momahi",
        Rank: "Owner",
        Token: tokenModule.CreateNewToken("momahi", "Owner", null),
        Results: tokenModule.CheckToken(tokenModule.CreateNewToken("momahi", "Owner", null))
    }

    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(data, null, 2));

})

app.use('/images', express.static(path.join(__dirname, 'images')));

// =====================

app.listen(Config.ServerPort, () => {

    console.log(Colors.Cyan + ` Server Run at http://localhost:${Config.ServerPort} ` + Colors.Reset);

})
