const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const verifiedAuth = (req, res, next) => {
    const bearHeader = req.headers["authorization"]
    if (typeof bearHeader == "undefined") {
        res.status(200).json([{ message: 'Access Denied. Token needed' }])
    } else {
        try {
            const headerToken = bearHeader.split(' ')
            const neededToken = headerToken[1]
            req.token = neededToken
            req.decoded = jwt.verify(neededToken,process.env.JWT_KEY)
            // console.log(req.token)
            next()

        } catch (error) {
            res.status(403).json([{ message: "Invalid Token" }])
        }

    }
}

module.exports = verifiedAuth;

