const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const { router } = require('./routes/routes.js')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// cors setup; enables api to be accessible cross-origin
app.use(cors())

//body-parser setup to allow for the req.body to be populated
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// route setup to access details in the routes
app.use('/', router)
app.use('/signup', router)

app.listen(PORT, () => {
    console.log(`backend active on port ${PORT}`)
})

// console.log(__dirname,"backend")
