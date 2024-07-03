const { z } = require('zod')
const Product = require('../models/product.model')
const ERRORS = require('../../config/errors')
const formatResponse = require('../../utils/formatResponse')

const productSchema = z.object({
   name: z.string().min(3).max(100),
   description: z.string().min(10).max(500),
   price: z.number().min(1),
   category: z.string().min(3).max(50),
   images: z.string().min(3).max(500),
   tags: z.array(z.string()),
})

const updateSchema = z.object({
   name: z.string().min(3).max(100).optional(),
   description: z.string().min(10).max(500).optional(),
   price: z.number().min(1).optional(),
   category: z.string().min(3).max(50).optional(),
   images: z.string().min(3).max(500).optional(),
   tags: z.array(z.string()).optional(),
})

// Create a new product
async function createProduct(req, res, next) {
   const safePayload = productSchema.safeParse(req.body)
   if (!safePayload.success) return next(ERRORS.invalidCrediential)

   const newProduct = await new Product(safePayload.data).save()

   res.status(201).json(formatResponse({ data: newProduct, status: 201 }))
}

// Get all products
async function getAllProducts(req, res, next) {
   const { category, limit = 20, page = 1 } = req.query

   const query = Object.assign({}, category ? { category } : {})

   const count = await Product.countDocuments(query)
   const products = await Product.find(query)
      .skip((page >= 1 ? page - 1 : 0) * limit)
      .limit(limit >= 1 ? +limit : 20)

   res.status(200).json(formatResponse({ data: products, count }))
}

// Get a specific product by ID
async function getProductById(req, res) {
   const product = await Product.findById(req.params.productId)
   if (!product) return next(ERRORS.notFound)
   res.status(200).json({ data: product, error: null })
}

async function searchProducts(req, res, next) {
   if (!req.query.q)
      return next({
         ...ERRORS.invalidCrediential,
         error: 'Search query is required',
      })
   const regex = new RegExp(query, 'i')
   const limit = 10
   const skip = 1

   const fetchQuery = {
      $or: [
         { name: { $regex: regex } },
         { description: { $regex: regex } },
         { category: { $regex: regex } },
         { tags: { $in: [regex] } },
      ],
   }

   const totalCount = await Product.countDocuments(fetchQuery)

   const searchResults = await Product.find(fetchQuery)
      .skip((skip - 1) * limit)
      .limit(limit)

   res.status(200).json(
      formatResponse({
         count: totalCount,
         data: searchResults,
      })
   )
}

// Update a product by ID
async function updateProductById(req, res, next) {
   const safePayload = updateSchema.safeParse(req.body)
   if (!safePayload.success) return next(ERRORS.invalidCrediential)

   const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      safePayload.data,
      { new: true }
   )

   if (!updatedProduct) return next(ERRORS.notFound)

   res.status(200).json({ data: updatedProduct })
}

// Delete a product by ID
async function deleteProductById(req, res) {
   const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
   if (!deletedProduct) return next(ERRORS.badRequest)
   res.sendStatus(204)
}

async function getCategories(req, res) {
   const { limit = 10 } = req.query

   const categories = await Product.aggregate([
      {
         $group: {
            _id: '$category',
            count: { $sum: 1 },
         },
      },
      {
         $project: {
            _id: 0,
            name: '$_id',
            count: 1,
         },
      },
   ])
      .sort({ count: -1 })
      .limit(limit >= 1 ? +limit : 10)

   res.status(200).json(formatResponse({ data: categories, error: null }))
}

async function getTrendings(req, res) {
   const { category, limit = 10, page = 1 } = req.query

   const q = {}
   if (category) {
      Object.assign(q, { category })
   }

   const trendings = await Product.find(q)
      .sort({ sold: -1 })
      .limit(limit >= 1 ? limit : 10)
      .skip((page >= 1 ? page - 1 : 1) * limit)

   res.status(200).json(formatResponse({ data: trendings, error: null }))
}

async function getSpecials(req, res) {
   const specials = await Product.find({ price: { $lt: 300 } }).sort({
      price: 1,
   })

   res.status(200).json(formatResponse({ data: specials, error: null }))
}

module.exports = {
   createProduct,
   getAllProducts,
   getProductById,
   updateProductById,
   deleteProductById,
   searchProducts,
   getCategories,
   getTrendings,
   getSpecials,
}
