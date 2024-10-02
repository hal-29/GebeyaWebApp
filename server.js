require('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')
const connectDb = require('./config/db')
const {
   handleErrors,
   handleDatabaseError,
} = require('./api/middlewares/handleErrors')

// require('./dummy_data')

const app = express()

app.use((req, res, next) => {
   if (req.originalUrl === '/api/order/webhook')
      express.raw({ type: 'application/json' })(req, res, next)
   else express.json()(req, res, next)
})

app.use(
   cors({
      origin: '*',
      credentials: true,
   })
)
app.use(cookieParser())
app.use('/api/wishlist', require('./api/routes/wishList.route'))
app.use('/api/order', require('./api/routes/order.route'))
app.use('/api/user', require('./api/routes/user.route'))
app.use('/api/product', require('./api/routes/product.route'))
app.use('/api/auth', require('./api/routes/auth.route'))

app.use(express.static(path.join(__dirname, './ui/dist')))
app.get('*', (_, res) => {
   res.sendFile(path.join(__dirname, './ui/dist/index.html'))
})

app.use(handleDatabaseError)
app.use(handleErrors)

const PORT = process.env.PORT
const HOST = process.env.HOST
connectDb(function () {
   app.listen(PORT, () =>
      console.log(
         chalk.bgRedBright.bold(`Server listening on `),
         chalk.bold(`http://${HOST}:${PORT} 📡`)
      )
   )
})
