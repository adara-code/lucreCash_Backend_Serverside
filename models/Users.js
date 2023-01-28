const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js');
const { AccountStatement } = require('./Account.js');

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

User.hasOne(AccountStatement, {
    foreignKey : {
        type: Sequelize.UUID,
        allowNull: false
    }
});
AccountStatement.belongsTo(User)


// User.hasOne(AccountStatement, {
//     foreignKey: 'myAccountId',
//     type: Sequelize.UUID,
//     allowNull: false,
// });
// AccountStatement.belongsTo(User);


// references: {
//     model: 'Users',
//     key: 'idUsers'
//   }

module.exports = User;
