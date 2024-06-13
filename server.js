require('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const express = require('express')
const {
   setupKinde,
   GrantType,
   protectRoute,
} = require('@kinde-oss/kinde-node-express')
const path = require('path')

const chalk = require('chalk')
const connectDb = require('./config/db')
const {
   handleErrors,
   handleDatabaseError,
} = require('./api/middlewares/handleErrors')
const { head } = require('./api/routes/wishList.route')

const config = {
   grantType: GrantType.AUTHORIZATION_CODE,
   clientId: process.env.KINDE_CLIENT_ID,
   issuerBaseUrl: process.env.KINDE_ISSUER_URL,
   siteUrl: process.env.KINDE_SITE_URL,
   secret: process.env.KINDE_CLIENT_SECRET,
   redirectUrl: process.env.KINDE_REDIRECT_URL,
   unAuthorisedUrl: process.env.KINDE_SITE_URL,
   postLogoutRedirectUrl: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
}

const app = express()

const PORT = process.env.PORT

// disable cors
// app.use((_, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', '*')
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//    next()
// })

// const client = setupKinde(config, app)

app.use(express.json())
app.use(cors())

app.use('/api/wishlist', require('./api/routes/wishList.route'))
app.use('/api/order', require('./api/routes/order.route'))
app.use('/api/user', require('./api/routes/user.route'))
app.use('/api/product', require('./api/routes/product.route'))
// app.use('/api/auth', require('./api/routes/auth.route'))

app.use(express.static(path.join(__dirname, './client/dist')))
app.get('*', (_, res) => {
   res.sendFile(path.join(__dirname, './client/dist/index.html'))
})

app.use(handleDatabaseError)
app.use(handleErrors)

connectDb(function () {
   app.listen(PORT, '127.0.0.1', () =>
      console.log(
         chalk.bgRedBright.bold(`Server listening on `),
         chalk.bold(`http://127.0.0.1:${PORT} 📡`)
      )
   )
})
