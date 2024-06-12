const { getUser } = require('@kinde-oss/kinde-node-express')
const express = require('express')
const { getUserInfo } = require('../controllers/user.controller')
const router = express.Router()

router.get('/', getUser, getUserInfo)

module.exports = router
