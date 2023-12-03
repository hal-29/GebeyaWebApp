const bcrypt = require('bcryptjs')
const ERRORS = require('../../config/errors')
const generateToken = require('../helperes/generateToken')
const User = require('../models/user.model')

async function createUser(req, res, next) {
   const { name, email, password, avatar } = req.body
   const user = new User({ name, email, avatar, password })
   const newUser = await user.save()
   if (!newUser) return next(ERRORS.INVALID_CREDIENTIAL)

   const token = generateToken({ id: newUser._id })

   res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
   })
   newUser.password = undefined
   res.status(201).json({
      message: 'account created successfully.',
      account: newUser,
   })
}

async function loginUser(req, res, next) {
   const { email, password } = req.body
   if (!email || !password) return next(ERRORS.BAD_REQUEST)

   const user = await User.findOne({ email })
   if (!user) return next(ERRORS.INVALID_CREDIENTIAL)

   const isPasswordValid = await bcrypt.compare(password, user.password)
   if (!isPasswordValid) return next(ERRORS.INVALID_CREDIENTIAL)

   const token = generateToken({ id: user._id })

   res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
   })

   user.password = undefined
   res.status(200).json({ account: user, message: 'successfully logged in' })
}

async function logoutUser(req, res, next) {
   res.clearCookie('jwt')
   res.send(200).json({ message: 'logout successful' })
}

module.exports = {
   createUser,
   loginUser,
   logoutUser,
}
