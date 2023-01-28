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

// data validation - add finance details schema
const accountSchema = Joi.object({
    Income: Joi.number().integer().positive().min(100).required(),
    Expenses: Joi.number().integer().positive().required(),
    Debt: Joi.number().integer().required()
})

// data validation - edit finance details schema
const editSchema = Joi.object({
    editIncome: Joi.number().integer().positive().min(100),
    editExpense: Joi.number().integer().positive(),
    editDebt: Joi.number().integer()
})

module.exports = {signupSchema, loginSchema, accountSchema, editSchema}

