require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDb = require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')
const express = require('express')
const { setupKinde } = require('@kinde-oss/kinde-node-express')

const config = {
   clientId: process.env.KINDE_ID,
   issuerBaseUrl: process.env.KINDE_ISSUER_URL,
   siteUrl: process.env.SITE_URL,
   secret: process.env.KINDE_SECRET,
   redirectUrl: process.env.REDIRECT_URL,
}

const {
   handleErrors,
   handleDatabaseError,
} = require('./api/middlewares/handleErrors')

const app = express()
setupKinde(config, app)

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(
   cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      exposedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
   })
)

app.use(cookieParser())

app.use('/api/user', require('./api/routes/user.route'))
app.use('/api/product', require('./api/routes/product.route'))
app.use('/api/wishlist', require('./api/routes/wishList.route'))
app.use('/api/order', require('./api/routes/order.route'))

app.use(handleDatabaseError)
app.use(handleErrors)

connectDb(function () {
   app.listen(PORT, () =>
      console.log(
         chalk.bold.bgBlueBright(
            `Server listening on http://localhost:${PORT}📡`
         )
      )
   )
})
