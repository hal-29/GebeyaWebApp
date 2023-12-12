const User = require('../models/user.model')
const ERRORS = require('../../config/errors')

async function getWishLists(req, res, next) {
   const user = await User.findById(req.userId)
      .populate('wishlist', 'name price category')
      .select('wishlist')

   if (!user) {
      return next(ERRORS.SERVER_FAILED)
   }

   res.status(200).json(user.wishlist)
}

async function addToWishList(req, res, next) {
   const { productId } = req.body

   const user = await User.findById(req.userId)

   if (!user) {
      return next(ERRORS.SERVER_FAILED)
   }

   if (user.wishlist.find(prod => prod === productId)) {
      return res.status(200).json(user.wishlist)
   }

   user.wishlist.push(productId)
   const updatedUser = await user.save()

   if (!updatedUser) {
      return next(ERRORS.SERVER_FAILED)
   }

   res.status(201).json(updatedUser.wishlist)
}

async function removeAllWishList(req, res, next) {
   const user = await User.findByIdAndUpdate(
      req.userId,
      { wishlist: [] },
      { new: true }
   )

   if (!user) {
      return next(ERRORS.NOT_FOUND)
   }

   res.status(204).end()
}

async function removeWishList(req, res, next) {
   const { productId } = req.params

   const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { wishlist: productId } },
      { new: true }
   )

   if (!user) {
      return next(ERRORS.NOT_FOUND)
   }

   res.status(204).end()
}

module.exports = {
   getWishLists,
   addToWishList,
   removeAllWishList,
   removeWishList,
}
