const express = require('express')
const { getUserInfo } = require('../controllers/user.controller')
const router = express.Router()

router.get('/', getUserInfo)

module.exports = router
