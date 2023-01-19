const jwt = require('jsonwebtoken')

const verifiedAuth = (req,res,next) => {
    const bearHeader = req.headers["authorization"]
    if(typeof bearHeader == "undefined") {
        res.status(200).json([{message: 'Access Denied'}])
    } else {
        const headerToken = bearHeader.split(' ')
        const neededToken = headerToken[1]
        req.token = neededToken
        next()
    }
}

module.exports = verifiedAuth;

