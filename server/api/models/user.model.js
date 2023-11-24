const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      email: {
         type: String,
         required: true,
         unique: true,
         match: /^\S+@\S+\.\S+$/,
      },
      password: { type: String, required: true },
      avatar: String,
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

userSchema.statics.login = async function ({ email, password }) {
   const user = await this.findOne({ email })
   if (!user) throw new Error('User not found')

   const isPasswordValid = await bcrypt.compare(password, user.password)
   if (!isPasswordValid) throw new Error('Inavlid credentials')

   user.password = undefined
   return user
}

const User = mongoose.model('User', userSchema)
module.exports = User
