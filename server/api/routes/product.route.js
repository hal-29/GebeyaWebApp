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

router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/phones', bestDealSmartphones)
router.get('/search', searchProducts)

router.get('/:productId', getProductById)
router.put('/:productId', updateProductById)
router.delete('/:productId', deleteProductById)

module.exports = router
