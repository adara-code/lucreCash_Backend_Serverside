const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')
const Joi = require('joi')
const User = require("../models/Users.js");
const { AccountStatement } = require('../models/Account.js');
const { accountSchema, editSchema } = require('../validation/dataValidation.js');
const jwt = require('jsonwebtoken');
const { isError } = require('joi');


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

        const editedIncome = req.body.Income;
        const editedExpense = req.body.Expenses;
        const editedDebt = req.body.Debt;

        await AccountStatement.update({
            netIncome: editedIncome,
            expenses: editedExpense,
            debt: editedDebt
        }, {
            where: {
                userUserid: req.decoded.userid
            }
        })

        res.status(200).json([{message:"success"}])

        // await AccountStatement.findOne({
        //     where: {
        //         userUserid: req.decoded.userid
        //     }
        // }).then(rs => {
        //     res.status(200).json([{ message: rs }])
        // }).catch(err => {
        //     console.log(err)
        // })
    }

}

const dashboard = async (req, res) => {
    const username = req.decoded.username
    await AccountStatement.findAll({
        where : {
            userUserid : req.decoded.userid
        }
    }).then(rs => {
        // console.log(rs[0].dataValues.netIncome)
        const totalIncome = rs[0].dataValues.netIncome
        const totalExpenses = rs[0].dataValues.expenses
        const totalDebt = rs[0].dataValues.debt
        const disposableIncome = totalIncome - totalExpenses - totalDebt

        if(disposableIncome > 0) {
            res.status(200).json([{username, totalIncome, totalExpenses, totalDebt,disposableIncome}])
        } else if(disposableIncome == 0) {
            res.status(200).json([{username, totalIncome, totalExpenses, totalDebt, disposableIncome}])
        } else {
            res.status(200).json([{username, totalIncome, totalExpenses, totalDebt,disposableIncome}])
        }
    }).catch(err => {
        console.log(err)
    })
    
}

const currentPosition = async(req,res) => {
    const username = req.decoded.username
    await AccountStatement.findAll({
        where : {
            userUserid : req.decoded.userid
        }
    }).then(rs => {
        console.log(rs[0].dataValues.netIncome)

        const totalIncome = rs[0].dataValues.netIncome
        const totalExpenses = rs[0].dataValues.expenses
        const totalDebt = rs[0].dataValues.debt
        const disposableIncome = totalIncome - totalExpenses - totalDebt
        
        res.status(200).json([{currentExpenses:totalExpenses, currentDebt: totalDebt, currentSavings:disposableIncome}])
    }).catch(err => {
        res.status(200).json([{message: "Token Needed"}])
        console.log(err)
    })
}

module.exports = { dashboard, addFinanceDetails, editFinanceDetails, currentPosition }

// sequelize.sync({force: true}).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })
