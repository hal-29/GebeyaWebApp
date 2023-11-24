require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDb = require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const handleErrors = require('./api/middlewares/handleErrors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', require('./api/routes/auth.route'))
app.use('/api/user', require('./api/routes/user.route'))
app.use('/api/product', require('./api/routes/product.route'))

app.use(handleErrors)

connectDb(function () {
   app.listen(PORT, () =>
      console.log(`SERVER STARTED ON http://localhost:${PORT} 📡`)
   )
})
