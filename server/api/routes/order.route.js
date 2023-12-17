const express = require('express')
const router = express.Router()
const { orderProduct, getOrders } = require('../controllers/order.controller')
const authenticate = require('../middlewares/authenticate')

router.get('/', authenticate, getOrders)
router.post('/', authenticate, orderProduct)

module.exports = router
