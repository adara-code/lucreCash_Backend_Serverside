const Sequelize = require('sequelize')
const sequelizeConnector = require('../config/connection.js')
const User = require('./Users.js')

const AccountStatement = sequelizeConnector.define("account", {
    accountId : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false 
    },
    netIncome : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    expenses : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    debt : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})
// AccountStatement.belongsTo(User)

module.exports = {AccountStatement}