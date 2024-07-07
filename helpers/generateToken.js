const jwt = require('jsonwebtoken')

async function generateToken(id, type) {
   if (type !== 'access' && type !== 'refresh')
      throw new Error('Invalid token type')

   let token

   if (type === 'access') {
      token = jwt.sign({ id }, process.env.JWT_ACCESS_KEY, {
         expiresIn: '15m',
      })
   } else {
      token = jwt.sign({ id }, process.env.JWT_REFRESH_KEY, {
         expiresIn: '7d',
      })
   }

   return token
}

module.exports = generateToken
