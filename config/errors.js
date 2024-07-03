const ERRORS = {
   // Authentication and Authorization errors
   invalidCrediential: {
      status: 400,
      error: 'Invalid crediantials provided',
      data: null,
   },
   forbidden: {
      status: 403,
      error: 'Access forbidden',
      data: null,
   },
   badRequest: {
      status: 400,
      error: 'Bad request',
      data: null,
   },
   invalidToken: {
      status: 400,
      error: 'Invalid token provided',
      data: null,
   },
   unauthorised: {
      status: 401,
      error: 'Unauthorized access requested',
      data: null,
   },
   notFound: {
      status: 404,
      error: 'Resource not found',
      data: null,
   },
   serverFailed: {
      status: 500,
      error: 'Server failed to process request',
      data: null,
   },
   wrongEmailOrPassword: {
      status: 400,
      error: 'Wrong email or password',
      data: null,
   },

   // Validation errors
   validationError: {
      status: 422,
      error: 'Invalid input data provided',
      data: null,
   },

   // General database-related errors
   dbDuplicateEntry: {
      status: 400,
      error: 'Email already exists',
      data: null,
   },

   // File upload errors
   fileUploadError: {
      status: 500,
      error: 'Error uploading file',
      data: null,
   },
}

module.exports = ERRORS
