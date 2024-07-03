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
      address: { type: String },
   },
   {
      versionKey: false,
      toObject: {
         virtuals: true,
         transform: function (doc, ret) {
            ret.id = ret._id
            delete ret._id
         },
      },
      toJSON: {
         virtuals: true,
         transform: function (doc, ret) {
            ret.id = ret._id
            delete ret._id
         },
      },
   }
)

const User = mongoose.model('User', userSchema)
module.exports = User
