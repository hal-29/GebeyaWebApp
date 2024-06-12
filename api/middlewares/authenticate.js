import { client } from '../../server'

async function authenticate(req, res, next) {
   const isAuthentiated = await client.isAuthenticated(req)
   if (isAuthentiated) {
      next()
   } else {
      res.status(401).json({ message: 'Unauthorized' })
   }
}

module.exports = authenticate
