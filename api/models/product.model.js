const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      tags: {
         type: [String],
         required: true,
      },
   },
   {
      versionKey: false,
   }
)

productSchema.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
