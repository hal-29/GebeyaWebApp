const express = require('express')
const router = express.Router()

const {
   createProduct,
   getAllProducts,
   getProductById,
   updateProductById,
   deleteProductById,
   searchProducts,
   getCategories,
   getTrendings,
   getSpecials,
} = require('../controllers/product.controller')

router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/search', searchProducts)
router.get('/categories', getCategories)
router.get('/trendings', getTrendings)
router.get('/specials', getSpecials)

router.get('/:productId', getProductById)
router.put('/:productId', updateProductById)
router.delete('/:productId', deleteProductById)

module.exports = router
