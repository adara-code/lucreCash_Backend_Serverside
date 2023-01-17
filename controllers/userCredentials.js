const Joi = require('joi')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection.js')
const { signupSchema, loginSchema } = require('../validation/dataValidation.js')
const user = require('../models/Users.js')


const salt = bcrypt.genSaltSync(10)

const signup = async (req, res) => {
    const signupValidation = await signupSchema.validate(req.body)
    if (signupValidation.error) {
        console.log(signupValidation.error.details[0].message)
        res.status(200).json([{ message: signupValidation.error.details[0].message }])

    } else {
        const user = {
            fullnames : signupValidation.value.fullnames,
            inputUsername : signupValidation.value.username,
            inputEmail : signupValidation.value.email,
            inputPassword : bcrypt.hashSync(signupValidation.value.password, salt)
        }

        console.log(user)

        // user.create({
        //     fullnames : inputFullnames,
        //     username : inputUsername,
        //     email: inputEmail,
        //     password: inputPassword
        // })
        // // res.status(200).json(["Registration successful"])
        // console.log("Credentials successful")
    }

}

const login = async (req, res) => {
    const loginValidation = await loginSchema.validate(req.body)
    if (loginValidation.error) {
        res.status(200).json([{ message: loginValidation.error.details[0].message }])
    } else {
        console.log("Login validation successful")
    }
}

module.exports = { signup, login }



/*creates the user table in the database
sequelize.sync().then(result => console.log(result)) */
