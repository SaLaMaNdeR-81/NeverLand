
const jwt = require('jsonwebtoken')
const Config = require("../Config.json")

// =============             =============
//              =============
//          Token : 2
//              =============
// =============             =============


class TokenModule {

    CreateNewToken(Username, Rank, Time) {

        const data = {
            username: Username,
            rank: Rank
        }

        return jwt.sign(data, Config.SECRET_KEY)

    }


    CheckToken(Token) {

        return jwt.verify(Token, Config.SECRET_KEY, (err, decoded) => {
            if (err) throw err;

            return decoded

        });

    }


}

module.exports = TokenModule;
