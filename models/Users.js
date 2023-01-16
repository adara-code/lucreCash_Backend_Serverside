const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')

const User = sequelize.define("user", {
    userid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
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
    }
})

module.exports = User;
