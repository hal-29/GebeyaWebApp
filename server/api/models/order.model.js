const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
   {
      client: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true,
      },
      products: {
         type: [mongoose.Schema.Types.ObjectId],
         ref: 'Product',
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      delivery: {
         type: String,
         required: true,
      },
   },
   {
      versionKey: false,
      timestamps: true,
   }
)

orderSchema.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})

const product = mongoose.model('Order', orderSchema)
module.exports = product
