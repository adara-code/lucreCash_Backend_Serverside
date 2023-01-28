const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')
const Joi = require('joi')
const User = require("../models/Users.js");
const { AccountStatement } = require('../models/Account.js');
const { accountSchema, editSchema } = require('../validation/dataValidation.js');
const jwt = require('jsonwebtoken');


const addFinanceDetails = async (req, res) => {
    const validateInput = await accountSchema.validate(req.body)

    if (validateInput.error) {
        res.status(200).json([{ message: validateInput.error.details[0].message }])
    } else {
        const userFinances = {
            netIncome: validateInput.value.Income,
            expenses: validateInput.value.Expenses,
            debt: validateInput.value.Debt,
            userUserid: req.decoded.userid
        }
        AccountStatement.create(userFinances).then(rs => {
            res.status(200).json([{ message: "Items added" }])
            console.log(rs)
        }).catch(err => {
            res.status(200).json([{ message: err }])
            console.log(err)
        })
        // console.log(userFinances)
    }
}



const editFinanceDetails = async (req, res) => {
    const validateEdittedInput = await editSchema.validate(req.body)

    if (validateEdittedInput.error) {
        res.status(200).json([{ message: validateEdittedInput.error.details[0].message }])
    } else {

        const editedIncome = req.body.editIncome;
        const editedExpense = req.body.editExpense;
        const editedDebt = req.body.editDebt;

        await AccountStatement.update({
            netIncome: editedIncome,
            expenses: editedExpense,
            debt: editedDebt
        }, {
            where: {
                userUserid: req.decoded.userid
            }
        })

        AccountStatement.findAll({
            where: {
                userUserid: req.decoded.userid
            }
        }).then(rs => {
            res.status(200).json([{ message: rs }])
        }).catch(err => {
            console.log(err)
        })
    }

}

const dashboard = async (req, res) => {
    res.status(200).json([{ message: req.decoded }])
    console.log(req.decoded.userid)
    // res.status(200).json([{message: "Touchdown"}])
}

module.exports = { dashboard, addFinanceDetails, editFinanceDetails }

// sequelize.sync({force: true}).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })
