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
         transform: function (doc, ret) {
            ret.id = ret._id.toString()
            delete ret._id
         },
      },
      toJSON: {
         transform: function (doc, ret) {
            ret.id = ret._id.toString()
            delete ret._id
         },
      },
   }
)

const User = mongoose.model('User', userSchema)
module.exports = User
