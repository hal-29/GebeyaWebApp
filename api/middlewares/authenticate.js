const jwt = require('jsonwebtoken')
const ERRORS = require('../../config/errors')
const User = require('../models/user.model')

async function authenticate(req, _, next) {
   const authHeader = req.headers.authorization

   const token = authHeader?.split(' ').at(1)
   if (!token) {
      return next(ERRORS.BAD_REQUEST)
   }

   const secretKey = process.env.JWT_ACCESS_KEY

   if (!secretKey) throw new Error('JWT secret key not found')

   let verified
   try {
      verified = jwt.verify(token, secretKey)
   } catch (error) {
      return next(ERRORS.BAD_REQUEST)
   }

   const user = await User.findById(verified.id).select('-password')

   if (!user) return next(ERRORS.BAD_REQUEST)

   req.user = user

   next()
}

module.exports = authenticate
