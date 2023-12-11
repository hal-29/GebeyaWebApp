const mongoose = require('mongoose')

function connectDb(cb) {
   mongoose
      .connect(
         process.env.NODE_ENV === 'dev'
            ? process.env.DB_URI_DEV
            : process.env.DB_URI_PROD
      )
      .then(cb)
      .catch(err => console.error(err))
}

module.exports = connectDb
