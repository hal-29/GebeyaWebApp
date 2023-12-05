const express = require('express')
const router = express.Router()
const {
   createProduct,
   getAllProducts,
   getProductById,
   updateProductById,
   deleteProductById,
   bestDealSmartphones,
} = require('../controllers/product.controller') // Adjust the path based on your project structure

router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/phones', bestDealSmartphones)

router.get('/:productId', getProductById)
router.put('/:productId', updateProductById)
router.delete('/:productId', deleteProductById)

module.exports = router
