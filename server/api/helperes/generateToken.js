const jwt = require('jsonwebtoken')

function generateToken(payload) {
   if (!payload) throw new Error('Payload must be provided')
   const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 24 * 60 * 60,
   })
   return token
}

module.exports = generateToken
