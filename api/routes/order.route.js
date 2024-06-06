const express = require('express')
const router = express.Router()
const { orderProduct, getOrders } = require('../controllers/order.controller')
const authenticate = require('../middlewares/authenticate')

router.get('/', getOrders)
router.post('/', orderProduct)

module.exports = router
