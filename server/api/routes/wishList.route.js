const express = require('express')
const router = express.Router()

const {
   addToWishList,
   removeAllWishList,
   removeWishList,
   getWishLists,
} = require('../controllers/wishList.controller')
const authenticate = require('../middlewares/authenticate')

router.get('/', authenticate, getWishLists)
router.post('/', authenticate, addToWishList)
router.delete('/all', authenticate, removeAllWishList)
router.delete('/:productId', authenticate, removeWishList)

module.exports = router
