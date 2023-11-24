const mongoose = require('mongoose')

function connectDb(cb) {
   mongoose
      .connect(process.env.DB_URI)
      .then(cb)
      .catch(err => console.err(err))
}

module.exports = connectDb
