const express = require('express')
const router = express.Router()
const {
   orderProduct,
   getOrders,
   getOrderById,
   webhook,
} = require('../controllers/order.controller')
const authenticate = require('../middlewares/authenticate')

router.get('/', authenticate, getOrders)
router.get('/:id', authenticate, getOrderById)

router.post('/', authenticate, orderProduct)
router.post('/webhook', webhook)

module.exports = router
