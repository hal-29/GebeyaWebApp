const { Router } = require('express')
const router = Router()
const validateUserCrediential = require('../validations/validateUserCredential')
const { createUser } = require('../controllers/user.controller')

router.post('/create', validateUserCrediential, createUser)

module.exports = router
