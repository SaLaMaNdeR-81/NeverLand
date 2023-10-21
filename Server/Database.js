const mysql = require('mysql');
const Config = require('./Config.json')

const Colors = require("./Module/Colors")

const connection = mysql.createConnection({

    host: Config.SQL.Host,
    port: Config.SQL.Port,
    user: Config.SQL.User,
    password: Config.SQL.Password,
    database: Config.SQL.Database,

});

connection.connect((err) => {
    if (err) {
        console.error(Colors.Red + 'Error connecting to MySQL database: \n ' + Colors.Reset + err.stack);
        return;
    }
    console.log(Colors.Green + 'Connected to MySQL database as id ' + connection.threadId + Colors.Reset);
});

module.exports = connection;
