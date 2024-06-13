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

const User = mongoose.model('User', userSchema)
module.exports = User
