const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const ERRORS = require('../../config/errors')
const generateToken = require('../helperes/generateToken')

async function getUser(req, res, next) {
   const token = req.cookie
   const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
      (err, data) => {
         if (err) return null
         return data
      }
   )
}

async function createUser(req, res, next) {
   const password = req.body.password

   const hashedPassword = await bcrypt.hash(password, 10)
   const user = new User({
      ...req.body,
      password: hashedPassword,
   })
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

module.exports = {
   getUser,
   createUser,
}
