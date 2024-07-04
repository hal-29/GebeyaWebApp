const mongoose = require('mongoose')
const { MongoError } = require('mongodb')
const ERRORS = require('../../config/errors')

function handleErrors(err, req, res, next) {
   const errorResponse = {
      message: err.message || err.error || 'Internal Server Error',
   }
   res.status(err.status || 500).json(errorResponse)
}

const handleDatabaseError = (err, req, res, next) => {
   if (err instanceof mongoose.Error) {
      if (err.name === 'ValidationError') {
         const validationErrors = []
         for (const field in err.errors) {
            validationErrors.push({
               field,
               message: err.errors[field].message,
            })
         }
         return res.status(ERRORS.validationError.status).json({
            message: ERRORS.validationError.message,
            details: validationErrors,
         })
      }

      // Other Mongoose errors
      return res.status(ERRORS.serverFailed.status).json({
         message: ERRORS.serverFailed.message,
      })
   }

   // Handle MongoDB duplicate key error
   if (err instanceof MongoError && err.code === 11000) {
      return res.status(ERRORS.serverFailed.status).json({
         message: ERRORS.serverFailed.message,
      })
   }

   next(err)
}

module.exports = { handleErrors, handleDatabaseError }
