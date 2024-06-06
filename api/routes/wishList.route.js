const express = require('express')
const router = express.Router()

const {
   addToWishList,
   removeAllWishList,
   removeWishList,
   getWishLists,
} = require('../controllers/wishList.controller')

router.get('/', getWishLists)
router.post('/', addToWishList)
router.delete('/all', removeAllWishList)
router.delete('/:productId', removeWishList)

module.exports = router
