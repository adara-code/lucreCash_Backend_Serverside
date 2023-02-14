const express = require('express')
const { dashboard, addFinanceDetails, editFinanceDetails, currentPosition, idealPosition } = require('../controllers/dashboard.js')
const {signup, login} = require('../controllers/userCredentials.js')
const verifiedAuth = require('../middleware/authentication.js')
const router = express.Router()



// router.get('/',testing)

// ****NOTE...CHANGE THE METHOD TO POST
// router.get('/', home)
router.post('/signup',signup)
router.post('/login',login)
router.post('/add', verifiedAuth, addFinanceDetails)
router.put('/edit', verifiedAuth, editFinanceDetails)
router.post('/dashboard', verifiedAuth, dashboard)
router.get('/current', verifiedAuth, currentPosition)
router.get('/ideal', verifiedAuth,idealPosition)

module.exports = {router}