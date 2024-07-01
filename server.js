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

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api/wishlist', require('./api/routes/wishList.route'))
app.use('/api/order', require('./api/routes/order.route'))
app.use('/api/user', require('./api/routes/user.route'))
app.use('/api/product', require('./api/routes/product.route'))
app.use('/api/auth', require('./api/routes/auth.route'))

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
