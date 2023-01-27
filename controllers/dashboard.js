const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')
const Joi = require('joi')
const User = require("../models/Users.js");
const { AccountStatement } = require('../models/Account.js');
const { accountSchema } = require('../validation/dataValidation.js');
const jwt = require('jsonwebtoken');

const addFinanceDetails = async (req, res) => {
    const validateInput = await accountSchema.validate(req.body)

    if(validateInput.error){
        res.status(200).json([{message: validateInput.error.details[0].message}])
    }else {
        const userFinances = {
            netIncome: validateInput.value.Income,
            expenses: validateInput.value.Expenses,
            debt: validateInput.value.Debt,
            userUserid: req.decoded.userid
        }
        AccountStatement.create(userFinances).then(rs => {
            console.log(rs)
        }).catch(err => {
            console.log(err)
        })
        console.log(userFinances)

        res.status(200).json([{message: "We good"}])
    }
    
    

    // account.create()
    // res.status(200).json([{ message: req.decoded }])
}

const dashboard = async(req, res) => {
    res.status(200).json([{message: req.decoded}])
    console.log(req.decoded.userid)
    // res.status(200).json([{message: "Touchdown"}])
}

module.exports = { dashboard, addFinanceDetails }

// sequelize.sync({force: true}).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })


