const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')

const User = sequelize.define("user", {
    userid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    fullnames: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gmail: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = User;
