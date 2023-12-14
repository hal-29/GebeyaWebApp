const express = require('express')
const router = express.Router()
const { orderProduct } = require('../controllers/order.controller')
const authenticate = require('../middlewares/authenticate')

router.post('/', authenticate, orderProduct)

module.exports = router
