const crypto = require('crypto')
const bcrypt = require('bcrypt')

//              =============
// =============             =============
//      " $ SHA $ Salt $ HashCode " 
//      HashCode = sha256( sha256(Password) . Salt ) 
// =============             =============
//              =============

class HashModule {


    GenarateSalt() {

        const NewSalt = bcrypt.genSaltSync(8)
        const SplitSalt = NewSalt.split('$')
        const FinalSalt = SplitSalt[3]

        return FinalSalt
    }

    CreatNewHash(Password) {

        const HashPass = crypto.createHash('sha256').update(Password).digest('hex')
        const Salt = this.GenarateSalt()

        const FinalHash = crypto.createHash('sha256').update(HashPass + Salt).digest('hex')

        return "$" + "SHA" + "$" + Salt + "$" + FinalHash
    }

    ReMakeHash(Password, Salt) {

        const HashPass = crypto.createHash('sha256').update(Password).digest('hex')
        const FinalHash = crypto.createHash('sha256').update(HashPass + Salt).digest('hex')

        return "$" + "SHA" + "$" + Salt + "$" + FinalHash
    }

    CheckHash(HashCode) {

        const SplitHash = HashCode.split("$")

        return {
            Salt: SplitHash[2],
            HashCode: SplitHash[3],
        }
    }

    Comparison(HashCode, Password) {

        const Salt = this.CheckHash(HashCode).Salt

        const NewHash = this.ReMakeHash(Password, Salt)

        if (HashCode === NewHash) {
            return true
        } else {
            return false
        }

    }

}


module.exports = HashModule;
