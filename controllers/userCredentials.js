const Joi = require('joi')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection.js')
const { signupSchema, loginSchema } = require('../validation/dataValidation.js')
const User = require('../models/Users.js')


const salt = bcrypt.genSaltSync(10)

const signup = async (req, res) => {
    const signupValidation = await signupSchema.validate(req.body)

    if (signupValidation.error) {
        console.log(signupValidation.error.details[0].message)
        res.status(200).json([{ message: signupValidation.error.details[0].message }])

    } else {
        User.findAll({
            where: {
                username : signupValidation.value.username
            }
        }).then(rs => {
            if(rs.length >= 1){
                res.status(200).json({message: "Username taken"})
            } else {
                User.create({
                    fullnames : signupValidation.value.fullnames,
                    username : signupValidation.value.username,
                    email : signupValidation.value.email ,
                    password : bcrypt.hashSync(signupValidation.value.password, salt)
                })
                // console.log(rs)
                res.status(200).json([{message:"data created successfully"}])
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
            console.log("Login validation successful")
        }
    }

    module.exports = { signup, login }



/*creates the user table in the database | Add it to the signup function
sequelize.sync({ force: true }).then(result => {User.create(user object) console.log(result)}) */
