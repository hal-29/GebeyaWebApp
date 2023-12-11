const chalk = require('chalk')
const jwt = require('jsonwebtoken')
const ERRORS = require('../../config/errors')

async function authenticate(req, res, next) {
   const token = await jwt.verify(
      req.cookies?.jwt,
      process.env.JWT_SECRET_KEY,
      (err, data) => {
         if (!err) return data
      }
   )
   if (!token?.id) return next(ERRORS.INVALID_TOKEN)
   req.userId = token.id
   next()
}

module.exports = authenticate
