const express = require('express');
const router = express.Router();

const connection = require("../../Database")
const Config = require("../../Config.json")

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// =============================================

const HashModule = require("../../Module/HashModule")
const TokenModule = require("../../Module/TokenModule")
const hashModule = new HashModule();
const tokenModule = new TokenModule();

// =============================================



// =============             =============
//              =============
//               Check Token
//              =============
// =============             =============

router.post('/check-token', (req, res) => {

    const { token } = req.body

    const DeCoded_Token = jwt.verify(token, Config.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.json({ message: "Token is invalid or expired", err })
        } else {
            res.json({ token, callback: decoded, message: "Token is Active" })
        }
    });

})

// =============             =============
//              =============
//               API - Login
//              =============
// =============             =============

router.post('/login', (req, res) => {

    const { username, password } = req.body;
    const query = 'SELECT * FROM auth WHERE username =?';

    setTimeout(() => {

        connection.query(query, [username], (error, results, fields) => {

            if (error) throw error;

            if (results.length === 0) {
                return res.status(401).json({ message: 'Invalid Username' });
            }

            const Data = JSON.parse(JSON.stringify(results[0]));

            if (!hashModule.Comparison(Data.password, password)) {
                return res.status(401).json({ message: 'Invalid Password' });
            }

            if (Data && hashModule.Comparison(Data.password, password)) {

                const token = tokenModule.CreateNewToken(username, "Owner", null)
                return res.json({ token });

            }

        });

    }, 1000);

});

// =============              =============
//              ==============
//              API - Register
//              ==============
// =============              =============

router.post('/register', (req, res) => {

    const { username, password } = req.body

    function generateUID() {
        const timestamp = Date.now().toString(); // Get the current timestamp as a string
        const randomNum = Math.floor(Math.random() * 100000); // Generate a random number between 0 and 10000
        const uid = timestamp + randomNum; // Concatenate the timestamp and random number
        return uid;
    }

    if (!password) {
        return res.status(401).json({ type: "Error", message: 'Password is empty' })
    }

    const HashedPass = hashModule.CreatNewHash(password)
    const RegisterIp = req.ip

    const Query_CheckUser = 'SELECT * FROM auth WHERE username =?'
    const Query_MakeNewUser = `INSERT INTO auth (UID,username, password, register_date, register_ip) VALUES (?,?, ?, UNIX_TIMESTAMP() , ? )`;
    const Values = [generateUID(), username, HashedPass, RegisterIp]

    connection.query(Query_CheckUser, [username], (error, results, fields) => {

        if (error) throw error;

        if (results.length !== 0) {
            res.status(401).json({ type: "Error", message: 'Sorry, But I Have this User' })
        }

        connection.query(Query_MakeNewUser, Values, (error, results, fields) => {

            if (error) throw error;

            res.json({ type: "Successful", message: "User Created.", results })

        })

    })

});

// =============================================

module.exports = router;