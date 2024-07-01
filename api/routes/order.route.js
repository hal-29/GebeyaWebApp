const express = require('express')
const router = express.Router()
const {
   orderProduct,
   getOrders,
   getOrderById,
} = require('../controllers/order.controller')
const authenticate = require('../middlewares/authenticate')

router.use(authenticate)
router.get('/', getOrders)
router.post('/', orderProduct)
router.get('/:id', getOrderById)

module.exports = router
