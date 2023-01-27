const Joi = require('joi')


// data validation - signup page
const signupSchema = Joi.object({
    fullnames: Joi.string().min(5).max(25).required(),
    username: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required()
})

// data validation - login page
const loginSchema = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    password: Joi.string().min(5).max(20).required()
})

// data validation - account schema
const accountSchema = Joi.object({
    Income: Joi.number().integer().positive().min(100).required(),
    Expenses: Joi.number().integer().positive().required(),
    Debt: Joi.number().integer().required()
})


module.exports = {signupSchema, loginSchema, accountSchema}

