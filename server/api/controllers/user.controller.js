const jwt = require('jsonwebtoken')

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
