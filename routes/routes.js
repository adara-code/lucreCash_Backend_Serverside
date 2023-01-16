const express = require('express')
const {signup, login} = require('../controllers/userCredentials.js')
const router = express.Router()

// router.get('/',testing)

// ****NOTE...CHANGE THE METHOD TO POST
router.post('/signup',signup)
router.get('/login',login)

module.exports = {router}