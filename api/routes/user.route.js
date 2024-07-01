const express = require('express')
const { getUserInfo } = require('../controllers/user.controller')
const authenticate = require('../middlewares/authenticate')
const router = express.Router()

router.get('/', authenticate, getUserInfo)

module.exports = router
