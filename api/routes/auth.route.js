const express = require('express')
const {
   loginUser,
   registerUser,
   logoutUser,
   verifyUser,
} = require('../controllers/auth.controller')
const router = express.Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/logout', logoutUser)
router.post('/verify', verifyUser)

module.exports = router
