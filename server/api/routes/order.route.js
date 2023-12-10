const express = require('express')
const router = express.Router()
const { orderProduct } = require('../controllers/orders.controller')

router.post('/', orderProduct)

module.exports = router
