const Product = require('../models/product.model') // Adjust the path based on your project structure

// Create a new product
async function createProduct(req, res) {
   try {
      const newProduct = new Product(req.body)
      const savedProduct = await newProduct.save()
      res.status(201).json(savedProduct)
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

// Get all products
async function getAllProducts(req, res, next) {
   const filter = {}

   const query = req.query

   if (query.category) filter.category = query.category
   if (query.brand) filter.brand = query.brand

   const limit = query.limit || 20
   const skip = query.page || 1

   const count = await Product.countDocuments(filter)
   const products = await Product.find(filter)
      .skip((skip - 1) * limit)
      .limit(limit)

   res.status(200).json({ count, products })
}

// Best deals for smartphone
async function bestDealSmartphones(req, res, next) {
   const query = req.query
   const limit = query.limit || 7
   const smartphones = await Product.aggregate([
      {
         $match: {
            category: 'phone',
         },
      },
      {
         $addFields: {
            ratingToPriceRatio: { $divide: ['$rating', '$price'] },
         },
      },
      {
         $sort: { ratingToPriceRatio: -1 },
      },
      {
         $limit: Number(limit),
      },
   ])
   const prepared = smartphones.map(phone => {
      return {
         ...phone,
         id: phone._id,
         _id: undefined,
         ratingToPriceRatio: undefined,
      }
   })
   const count = await Product.countDocuments({ category: 'phone' })
   res.status(200).json({ count, phones: prepared })
}

// Get a specific product by ID
async function getProductById(req, res) {
   try {
      const product = await Product.findById(req.params.productId)
      if (!product) {
         return res.status(404).json({ error: 'Product not found' })
      }
      res.status(200).json(product)
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

async function searchProducts(req, res) {
   const query = req.query.q
   if (!query) {
      return res.status(400).json({ error: 'Search query is required' })
   }

   const regex = new RegExp(query, 'i')

   const limit = parseInt(req.query.limit) || 10
   const skip = parseInt(req.query.page) || 1

   const totalCount = await Product.countDocuments({
      $or: [
         { name: { $regex: regex } },
         { description: { $regex: regex } },
         { category: { $regex: regex } },
         { brand: { $regex: regex } },
      ],
   })

   const searchResults = await Product.find({
      $or: [
         { name: { $regex: regex } },
         { description: { $regex: regex } },
         { category: { $regex: regex } },
         { brand: { $regex: regex } },
      ],
   })
      .skip((skip - 1) * limit)
      .limit(limit)

   res.status(200).json({
      count: totalCount,
      products: searchResults,
   })
}

// Update a product by ID
async function updateProductById(req, res) {
   try {
      const updatedProduct = await Product.findByIdAndUpdate(
         req.params.productId,
         req.body,
         { new: true }
      )
      if (!updatedProduct) {
         return res.status(404).json({ error: 'Product not found' })
      }
      res.status(200).json(updatedProduct)
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

// Delete a product by ID
async function deleteProductById(req, res) {
   try {
      const deletedProduct = await Product.findByIdAndDelete(
         req.params.productId
      )
      if (!deletedProduct) {
         return res.status(404).json({ error: 'Product not found' })
      }
      res.status(200).json(deletedProduct)
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
   bestDealSmartphones,
   searchProducts,
}
