const Joi = require('joi')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection.js')
const { signupSchema, loginSchema } = require('../validation/dataValidation.js')
const User = require('../models/Users.js')


const salt = bcrypt.genSaltSync(10)

const signup = async (req, res) => {
    // const signupValidation = await signupSchema.validate(req.body)
    const user = {
        fullnames: "Shee Kay",
        username: "Shee",
        email: "shee@example.com",
        password: "123456"
    }
   sequelize.sync({force:true}).then(res => {
    User.create(user)
    console.log(res)
   })

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



/*creates the user table in the database | Add it to the signup function
sequelize.sync({ force: true }).then(result => console.log(result)) */
