const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const {
   addToWishList,
   removeAllWishList,
   removeWishList,
   getWishLists,
} = require('../controllers/wishList.controller')

router.use(authenticate)
router.get('/', getWishLists)
router.post('/', addToWishList)
router.delete('/all', removeAllWishList)
router.delete('/:productId', removeWishList)

module.exports = router
