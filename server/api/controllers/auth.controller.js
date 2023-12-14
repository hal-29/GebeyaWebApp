const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const ERRORS = require('../../config/errors')
const generateToken = require('../helperes/generateToken')

async function createUser(req, res, next) {
   const { name, email, password, avatar } = req.body

   const hashedPassword = await bcrypt.hash(password, 10)
   const user = new User({ name, email, avatar, password: hashedPassword })
   const newUser = await user.save()
   if (!newUser) return next(ERRORS.INVALID_CREDIENTIAL)

   const token = generateToken({ id: newUser._id })

   res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'prod',
      maxAge: 7 * 24 * 60 * 60 * 1000,
   })
   newUser.password = undefined
   res.status(201)
      .cookie('jwt', token, {
         httpOnly: true,
         sameSite: 'None',
         secure: true,
         maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
         message: 'account created successfully.',
         account: newUser,
      })
}

async function loginUser(req, res, next) {
   const { email, password } = req.body
   if (!email || !password) return next(ERRORS.BAD_REQUEST)

   const user = await User.findOne({ email }).select('-wishlist')
   if (!user) return next(ERRORS.INVALID_CREDIENTIAL)

   const isPasswordValid = await bcrypt.compare(password, user.password)
   if (!isPasswordValid) return next(ERRORS.INVALID_CREDIENTIAL)

   const token = generateToken({ id: user._id })

   user.password = undefined
   res.status(200)
      .cookie('jwt', token, {
         httpOnly: true,
         sameSite: 'None',
         secure: true,
         maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({ account: user, message: 'successfully logged in' })
}

async function getAuth(req, res, next) {
   const user = await User.findById(req.userId)
   if (!user) return next(ERRORS.NOT_FOUND)
   user.password = undefined
   res.status(200).json({
      message: 'Successfully authenticated',
      account: user,
   })
}

async function logoutUser(req, res, next) {
   res.status(204)
      .cookie('jwt', '', {
         httpOnly: true,
         sameSite: 'None',
         secure: true,
         maxAge: 0,
      })
      .end()
}

module.exports = {
   createUser,
   loginUser,
   logoutUser,
   getAuth,
}
