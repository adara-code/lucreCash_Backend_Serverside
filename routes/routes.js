const express = require('express')
const {signup, login, dashboard} = require('../controllers/userCredentials.js')
const verifiedAuth = require('../middleware/authentication.js')
const router = express.Router()

// router.get('/',testing)

// ****NOTE...CHANGE THE METHOD TO POST
router.post('/signup',signup)
router.post('/login',login)
router.post('/dashboard', verifiedAuth, dashboard)

module.exports = {router}