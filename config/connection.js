const Sequelize = require('sequelize')
const dotenv = require('dotenv')

// dotenv.config({path: '../.env'})
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,process.env.PASSWORD, {
    dialect: "mysql",
    port: process.env.DATABASE_PORT,
    host: process.env.HOST
})



// console.log(process.env.DATABASE)

module.exports = sequelize;






// sequelize.authenticate().then(result => {
//     console.log("Connection successful")
// }).catch(err => {
//     console.log("No connection")
// })