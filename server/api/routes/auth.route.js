const { Router } = require('express')
const validateUserCrediential = require('../validations/validateUserCredential')
const {
   createUser,
   loginUser,
   logoutUser,
   getAuth,
} = require('../controllers/auth.controller')
const authenticate = require('../middlewares/authenticate')

const router = Router()

router.get('/', authenticate, getAuth)
router.post('/login', loginUser)
router.post('/signup', validateUserCrediential, createUser)
router.get('/logout', logoutUser)

module.exports = router
