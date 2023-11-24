const ERRORS = require('../../config/errors')
const generateToken = require('../helperes/generateToken')
const User = require('../models/user.model')

async function createUser(req, res, next) {
   const { name, email, password, avatar } = req.body
   const user = new User({ name, email, avatar, password })
   const newUser = await user.save()
   if (newUser)
      res.status(201).json({
         message: 'account created successfully.',
         account: newUser,
      })
}

async function loginUser(req, res, next) {
   const { email, password } = req.body
   const user = await User.login({ email, password })
   if (!user) return next(ERRORS.INVALID_CREDIENTIAL)

   const token = generateToken({ id: user.id })
   res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
   })
   res.status(200).json(user)
}

async function logoutUser(req, res, nex) {
   res.clearCookie('jwt')
   res.send(200).json({ message: 'logout successful' })
}

module.exports = {
   createUser,
   loginUser,
   logoutUser,
}
