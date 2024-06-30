const mongoose = require('mongoose')
const { MongoError } = require('mongodb')
const ERRORS = require('../../config/errors')

function handleErrors(err, req, res, next) {
   console.error(err)
   const errorResponse = {
      message: err.message || 'Internal server error',
   }
   res.status(err.status || 500).json(errorResponse)
}

const handleDatabaseError = (err, req, res, next) => {
   if (err instanceof mongoose.Error) {
      // Mongoose validation error
      if (err.name === 'ValidationError') {
         const validationErrors = []
         for (const field in err.errors) {
            validationErrors.push({
               field,
               message: err.errors[field].message,
            })
         }
         return res.status(ERRORS.VALIDATION_ERROR.status).json({
            message: ERRORS.VALIDATION_ERROR.message,
            details: validationErrors,
         })
      }

      // Other Mongoose errors
      return res.status(ERRORS.DB_QUERY_ERROR.status).json({
         message: ERRORS.DB_QUERY_ERROR.message,
      })
   }

   // Handle MongoDB duplicate key error
   if (err instanceof MongoError && err.code === 11000) {
      return res.status(ERRORS.DB_DUPLICATE_ENTRY.status).json({
         message: ERRORS.DB_DUPLICATE_ENTRY.message,
      })
   }

   next(err)
}

module.exports = { handleErrors, handleDatabaseError }
