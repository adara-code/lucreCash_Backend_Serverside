const Joi = require('joi')
const sequelize = require('../config/connection.js')
const { signupSchema } = require('../validation/dataValidation.js')

// const user = require('../models/Users.js')


const signup = async(req,res) => {
    const validateUser = signupSchema.validate(req.body)
    if(validateUser.error) {
        console.log(validateUser.error.details[0].message)
        res.status(200).json([{message:validateUser.error.details[0].message}])
    } else {
        console.log("Credentials successful")
    }
    
}
const login = async(req,res) => {
    console.log("login route")
    res.status(200).json([{message: "login route is working"}])
}

module.exports = {signup, login}



//creates the user table in the database
// sequelize.sync().then(result => {
//     console.log(result)
// })
