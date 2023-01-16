const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({path: '../.env'})

const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

console.log(process.env.DATABASE)

module.exports = sequelize;

// sequelize.authenticate().then(result => {
//     console.log("Connection successful",result)
// }).catch(err => {
//     console.log("No connection")
// })