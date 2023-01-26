const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')
const Joi = require('joi')
const User = require("../models/Users.js");
const { AccountStatement } = require('../models/Account.js');
const { accountSchema } = require('../validation/dataValidation.js');
const jwt = require('jsonwebtoken');

const addFinanceDetails = async (req, res) => {
    const validateInput = await accountSchema.validate(req.body)
    res.status(200).json([{message: validateInput}])
    
    const userFinances = {
        inputNetIncome: req.body.income,
        inputExpenses: req.body.expenses,
        inputDebt: req.body.debt
    }
    // account.create()
    // res.status(200).json([{ message: req.decoded }])
}

const dashboard = async(req, res) => {
    res.status(200).json([{message: "Touchdown"}])
}

module.exports = { dashboard, addFinanceDetails }

// sequelize.sync({force: true}).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })


