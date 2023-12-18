const { Router } = require('express')
const {
   loginUser,
   logoutUser,
   getAuth,
} = require('../controllers/auth.controller')
const authenticate = require('../middlewares/authenticate')

const router = Router()

router.get('/', authenticate, getAuth)
router.post('/login', loginUser)
router.get('/logout', logoutUser)

module.exports = router
