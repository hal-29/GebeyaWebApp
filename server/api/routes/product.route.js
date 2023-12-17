const express = require('express')
const router = express.Router()
const {
   createProduct,
   getAllProducts,
   getProductById,
   updateProductById,
   deleteProductById,
   bestDealSmartphones,
   searchProducts,
} = require('../controllers/product.controller')
const authenticate = require('../middlewares/authenticate')

router.post('/', authenticate, createProduct)
router.get('/', getAllProducts)
router.get('/phones', bestDealSmartphones)
router.get('/search', searchProducts)

router.get('/:productId', getProductById)
router.put('/:productId', authenticate, updateProductById)
router.delete('/:productId', authenticate, deleteProductById)

module.exports = router
