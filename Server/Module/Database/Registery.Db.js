const connection = require("../../Database")
const Config = require("../../Config.json");
const { query } = require("express");

class Database_Registery {

    MakeNewProfile(UId, Email) {

        const query = "INSERT INTO profile (UID,username, password, register_date, register_ip) VALUES (?,?, ?, UNIX_TIMESTAMP() , ? )"

        connection.query(query, [username], (error, results, fields) => {

            if (error) throw error;

            res.status(401).json({ type: "Error", message: 'Sorry, But I Have this User' })

        })

    }

}

module.exports = Database_Registery;