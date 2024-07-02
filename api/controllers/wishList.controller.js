const User = require('../models/user.model')
const ERRORS = require('../../config/errors')
const WishList = require('../models/wishlist.model')
const Product = require('../models/product.model')

async function getWishLists(req, res, next) {
   const userId = req.user.id

   const withLists = await WishList.findOne({ user: userId })
      .select('products')
      .populate('products')
      .then(doc => doc?.products)

   res.status(200).json({ data: withLists, error: null })
}

async function addToWishList(req, res, next) {
   const { productId } = req.body
   const userId = req.user.id

   const product = await Product.findById(productId)
   if (!product) return next(ERRORS.NOT_FOUND)

   if (!(await WishList.findOne({ user: userId }))) {
      const newWishList = new WishList({
         user: userId,
         products: [productId],
      })

      await newWishList.save()
      return res.status(201).json({ data: product, error: null })
   }

   await WishList.findOneAndUpdate(
      { user: userId },
      { $addToSet: { products: productId } },
      { new: true }
   )
      .select('products')
      .populate('products')
      .then(doc => doc.products)

   res.status(201).json({ data: product, error: null })
}

async function removeAllWishList(req, res, next) {
   await WishList.findOneAndDelete({ user: req.user.id })
   res.status(204).end()
}

async function removeWishList(req, res, next) {
   const { productId } = req.params
   const userId = req.user.id

   const wishLists = await WishList.findOne({ user: userId })
      .select('products')
      .then(doc => doc.products)

   if (!wishLists.includes(productId)) return next(ERRORS.BAD_REQUEST)

   await WishList.findOneAndUpdate(
      { user: userId },
      { $pull: { products: productId } }
   )

   res.sendStatus(204)
}

module.exports = {
   getWishLists,
   addToWishList,
   removeAllWishList,
   removeWishList,
}
