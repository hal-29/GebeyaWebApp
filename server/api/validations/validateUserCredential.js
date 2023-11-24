const ERRORS = require('../../config/errors')

module.exports = function (req, res, next) {
   const { name, email, password } = req.body

   const nameRegex = /^[a-zA-Z ]{3,}$/
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   const passwordRegex = /^(?=.*[a-zA-Z0-9(),!@#$&<>]).{6,}$/

   if (
      !nameRegex.test(name) ||
      !emailRegex.test(email) ||
      !passwordRegex.test(password)
   )
      return next(ERRORS.INVALID_CREDIENTIAL)

   next()
}
