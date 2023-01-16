const sequelize = require('../config/connection.js')
// const user = require('../models/Users.js')


const testing = async(req,res) => {
    console.log("touchdown")
    res.status(200).json([{message: "it is working"}])
}
const signup = async(req,res) => {
    console.log("touchdown???")
    console.log("two undefined")
    res.status(200).json([{message: "this is the signup route??? OMG"}])
}

module.exports = {signup, testing}



//creates the user table in the database
// sequelize.sync().then(result => {
//     console.log(result)
// })
