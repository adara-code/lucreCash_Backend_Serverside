const express = require('express')
const { dashboard, addFinanceDetails, editFinanceDetails } = require('../controllers/dashboard.js')
const {signup, login} = require('../controllers/userCredentials.js')
const verifiedAuth = require('../middleware/authentication.js')
const router = express.Router()


// router.get('/',testing)

// ****NOTE...CHANGE THE METHOD TO POST
router.post('/signup',signup)
router.post('/login',login)
router.post('/add', verifiedAuth, addFinanceDetails)
router.put('/edit', verifiedAuth, editFinanceDetails)
router.post('/dashboard', verifiedAuth, dashboard)

module.exports = {router}