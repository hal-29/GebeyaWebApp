const ERRORS = {
   INVALID_CREDIENTIAL: {
      message: 'Invalid crediantials provided',
      status: 400,
   },
   INVALID_TOKEN: { message: 'Invalid token provided', status: 400 },
   UNAUTHORISED: { message: 'Unauthorized access requested', status: 401 },
   NOT_FOUND: { message: 'Requested resource does not exist', status: 404 },
}

module.exports = ERRORS
