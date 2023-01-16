const Joi = require('joi')


// data validation for the signup page
const signupSchema = Joi.object({
    fullnames: Joi.string().min(5).required(),
    username: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required()
})


module.exports = {signupSchema}

