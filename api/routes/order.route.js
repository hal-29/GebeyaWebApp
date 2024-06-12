const express = require('express')
const router = express.Router()
const { orderProduct, getOrders } = require('../controllers/order.controller')

router.get('/', getOrders)
router.post('/', orderProduct)

module.exports = router
