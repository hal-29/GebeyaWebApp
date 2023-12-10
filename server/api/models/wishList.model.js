const mongoose = require('mongoose')

const wishListSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   },
   product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
   },
})

wishListSchema.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})

const product = mongoose.model('WishList', wishListSchema)
module.exports = product
