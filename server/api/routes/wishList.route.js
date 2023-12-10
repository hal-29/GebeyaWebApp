const express = require('express')
const router = express.Router()

const {
   addToWishList,
   removeAllWishList,
   removeWishList,
} = require('../controllers/wishList.controller')

router.get('/:productId', addToWishList)
router.delete('/all', removeAllWishList)
router.delete('/:productId', removeWishList)

module.exports = router
