const { z } = require('zod')
const Product = require('../models/product.model')
const sendResponse = require('../../utils/sendResponse')

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
async function createProduct(req, res) {
   try {
      const body = productSchema.parse(req.body)
      const newProduct = new Product(body)
      const savedProduct = await newProduct.save()

      res.status(201).json({ data: savedProduct, error: null })
   } catch (error) {
      res.status(400).json({ error: error.message, data: null })
   }
}

// Get all products
async function getAllProducts(req, res, next) {
   const { category, limit = 20, page = 1, tags } = req.query
   const tagList = tags ? tags.split(',') : []

   const count = await Product.countDocuments({
      category,
      $or: tagList.map(tag => ({ tags: tag })),
   })
   const products = await Product.find({
      category,
      $or: tagList.map(tag => ({ tags: tag })),
   })
      .skip((page >= 1 || 1) * limit)
      .limit(limit >= 1 || 20)

   res.status(200).json({ data: products, count, error: null })
}

// Get a specific product by ID
async function getProductById(req, res) {
   try {
      const product = await Product.findById(req.params.productId)
      if (!product) {
         return res.status(404).json({ error: 'Product not found', data: null })
      }
      res.status(200).json({ data: product, error: null })
   } catch (error) {
      res.status(500).json({ error: error.message, data: null })
   }
}

async function searchProducts(req, res) {
   const query = req.query.q
   if (!query) {
      return res
         .status(400)
         .json({ error: 'Search query is required', data: null })
   }

   const regex = new RegExp(query, 'i')

   const limit = 10
   const skip = 1

   const totalCount = await Product.countDocuments({
      $or: [
         { name: { $regex: regex } },
         { description: { $regex: regex } },
         { category: { $regex: regex } },
         { tags: { $in: [regex] } },
      ],
   })

   const searchResults = await Product.find({
      $or: [
         { name: { $regex: regex } },
         { description: { $regex: regex } },
         { category: { $regex: regex } },
         { tags: { $in: [regex] } },
      ],
   })
      .skip((skip - 1) * limit)
      .limit(limit)

   res.status(200).json({
      count: totalCount,
      data: searchResults,
      error: null,
   })
}

// Update a product by ID
async function updateProductById(req, res) {
   try {
      const body = updateSchema.parse(req.body)

      const updatedProduct = await Product.findByIdAndUpdate(
         req.params.productId,
         body,
         { new: true }
      )
      if (!updatedProduct) {
         return res.status(401).json({ error: 'Bad request', data: null })
      }
      res.status(200).json({ data: updatedProduct, error: null })
   } catch (error) {
      res.status(500).json({ error: error.message, data: null })
   }
}

// Delete a product by ID
async function deleteProductById(req, res) {
   try {
      const deletedProduct = await Product.findByIdAndDelete(
         req.params.productId
      )
      if (!deletedProduct) {
         return res.status(401).json({ error: 'Bad request', data: null })
      }
      res.sendStatus(204)
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

module.exports = {
   createProduct,
   getAllProducts,
   getProductById,
   updateProductById,
   deleteProductById,
   searchProducts,
}
