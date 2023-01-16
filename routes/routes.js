const express = require('express')
const {signup, testing} = require('../controllers/userCredentials.js')
const router = express.Router()

router.get('/',testing)
router.get('/signup',signup)

module.exports = {router}