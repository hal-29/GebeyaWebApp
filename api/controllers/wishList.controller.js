const User = require('../models/user.model')
const ERRORS = require('../../config/errors')
const WishList = require('../models/wishlist.model')

async function getWishLists(req, res, next) {
   const userId = req.userId

   const withLists = await WishList.find({ user: userId }).populate('products')

   if (!withLists) {
      return next(ERRORS.NOT_FOUND)
   }
   res.status(200).json({ data: withLists, error: null })
}

async function addToWishList(req, res, next) {
   const { productId } = req.body
   const userId = req.userId

   const withLists = await WishList.findOne({ user: userId })

   if (!withLists) {
      const newWishList = new WishList({
         user: userId,
         products: [productId],
      })
      await newWishList.save()

      return res.status(201).json({ data: newWishList, error: null })
   }

   const newWishList = await WishList.findOneAndUpdate(
      { user: userId },
      { $addToSet: { products: productId } },
      { new: true }
   ).populate('products')

   res.status(201).json({ data: newWishList, error: null })
}

async function removeAllWishList(req, res, next) {
   await WishList.findOneAndDelete({ user: req.userId })
   res.status(204).end()
}

async function removeWishList(req, res, next) {
   const { productId } = req.params
   const userId = req.userId

   const withLists = await WishList.findOne({ user: userId })

   if (!withLists) {
      return next(ERRORS.NOT_FOUND)
   }

   const newWishList = await WishList.findOneAndUpdate(
      { user: userId },
      { $pull: { products: productId } },
      { new: true }
   ).populate('products')

   res.status(200).json({ data: newWishList, error: null })
}

module.exports = {
   getWishLists,
   addToWishList,
   removeAllWishList,
   removeWishList,
}
