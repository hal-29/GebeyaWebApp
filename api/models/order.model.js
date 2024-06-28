const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
   {
      client: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true,
      },
      products: [
         {
            product: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Product',
               required: true,
            },
            quantity: {
               type: Number,
               required: true,
               default: 1,
               min: 1,
            },
         },
      ],
      total: {
         type: Number,
         required: true,
      },
      status: {
         type: String,
         required: true,
         enum: ['pending', 'completed'],
         default: 'pending',
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

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
