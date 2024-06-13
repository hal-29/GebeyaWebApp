const mongoose = require('mongoose')

const wishListSchema = new mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true,
      },
      products: {
         type: [mongoose.Schema.Types.ObjectId],
         ref: 'Product',
         required: true,
      },
   },
   {
      versionKey: false,
      timestamps: true,
   }
)

wishListSchema.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})

const WishList = mongoose.model('WishList', wishListSchema)

module.exports = WishList
