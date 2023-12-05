const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: { type: String, required: true },
      avatar: { type: String },
      contact: { type: String },
      address: { type: String },
      wishlists: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
         },
      ],

      purchasedItems: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
         },
      ],

      orderedItems: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
         },
      ],
   },
   {
      versionKey: false,
   }
)
userSchema.set('toJSON', {
   transform: function (doc, ret) {
      ret.id = ret._id
      delete ret._id
   },
})
userSchema.pre('save', async function (next) {
   this.password = await bcrypt.hash(this.password, 10)
   return next()
})

const User = mongoose.model('User', userSchema)
module.exports = User
