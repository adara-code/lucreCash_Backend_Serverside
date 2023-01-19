const Joi = require('joi')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection.js')
const { signupSchema, loginSchema } = require('../validation/dataValidation.js')
const User = require('../models/Users.js')

// gensalt creates 10 random characters and its encrypted
const salt = bcrypt.genSaltSync(10)

/* this function first validates data using joi function, then goes back
to the database to check whether the username exists, if so, the new user is notified
that the username is taken, if not, a new User object is inserted into the db
*/
const signup = async (req, res) => {
    const signupValidation = await signupSchema.validate(req.body)

    if (signupValidation.error) {
        console.log(signupValidation.error.details[0].message)
        res.status(200).json([{ message: signupValidation.error.details[0].message }])

    } else {
        User.findAll({
            where: {
                username: signupValidation.value.username
            }
        }).then(rs => {
            if (rs.length >= 1) {
                res.status(200).json([{message: "Username taken"}])
            } else {
                User.create({
                    fullnames: signupValidation.value.fullnames,
                    username: signupValidation.value.username,
                    email: signupValidation.value.email,
                    password: bcrypt.hashSync(signupValidation.value.password, salt)
                }).then(rs => {
                    console.log(rs)
                    res.status(200).json([{ message: "Registration successfull" }])
                }).catch(err => {
                    console.log(err)
                    res.status(200).json([{ message: "Error: Registation Failed" }])
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

const login = async (req, res) => {
    const loginValidation = await loginSchema.validate(req.body)
    if (loginValidation.error) {
        res.status(200).json([{ message: loginValidation.error.details[0].message }])
    } else {
        User.findOne({
            where: {
                username : loginValidation.value.username,
            }
        }).then(rs => {
            if(rs == null) {
                // console.log(rs)
                res.status(200).json([{message: "Username doesn't exist"}])
            } else {
                const passwordCheck = bcrypt.compareSync(loginValidation.value.password, rs.dataValues.password)
                if(passwordCheck) {
                    res.status(200).json([{message: "Login successfull"}])
                } else {
                    res.status(200).json([{message: "Wrong password"}])
                }
                console.log(passwordCheck)
            }
            // console.log(res)
            // res.status(200).json([{message: rs}])
        }).catch(err => {
            console.log(err)
        })
        // console.log("Login validation successful")
    }
}

// const validity = bcrypt.compareSync(password, rs.dataValues.password)

module.exports = { signup, login }



/*creates the user table in the database | Add it to the signup function
sequelize.sync({ force: true }).then(result => {User.create(user object) console.log(result)}) */
