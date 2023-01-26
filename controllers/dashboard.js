const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')
const User = require("../models/Users.js");
const { AccountStatement } = require('../models/Account.js');
const jwt = require('jsonwebtoken');



sequelize.sync({force: true}).then(rs => {
    console.log(rs)
}).catch(err => {
    console.log(err)
})


