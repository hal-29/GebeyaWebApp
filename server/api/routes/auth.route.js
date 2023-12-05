const { Router } = require('express')
const validateUserCrediential = require('../validations/validateUserCredential')
const {
   createUser,
   loginUser,
   logoutUser,
} = require('../controllers/auth.controller')

const router = Router()

router.post('/login', loginUser)
router.post('/signup', validateUserCrediential, createUser)
router.get('/logout', logoutUser)

module.exports = router
