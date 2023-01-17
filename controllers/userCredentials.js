const Joi = require('joi')
const sequelize = require('../config/connection.js')
const { signupSchema, loginSchema } = require('../validation/dataValidation.js')

const user = require('../models/Users.js')


const signup = async(req,res) => {
    const signupValidation = await signupSchema.validate(req.body)
    if(signupValidation.error) {
        console.log(signupValidation.error.details[0].message)
        res.status(200).json([{message: signupValidation.error.details[0].message}])
        
    } else {
        // res.status(200).json(["Registration successful"])
        // console.log("Credentials successful")
    }
    
}
const login = async(req,res) => {
    const loginValidation = await loginSchema.validate(req.body)
    if(loginValidation.error){
        res.status(200).json([{message:loginValidation.error.details[0].message}])
    } else {
        console.log("Login validation successful")
    }
}

module.exports = {signup, login}



/*creates the user table in the database
sequelize.sync().then(result => console.log(result)) */
