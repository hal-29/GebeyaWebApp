const express = require('express')
const router = express.Router()

const {
   addToWishList,
   removeAllWishList,
   removeWishList,
} = require('../controllers/wishList.controller')
const authenticate = require('../middlewares/authenticate')

router.get('/:productId', authenticate, addToWishList)
router.delete('/all', authenticate, removeAllWishList)
router.delete('/:productId', authenticate, removeWishList)

module.exports = router
