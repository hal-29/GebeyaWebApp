const chalk = require('chalk')
function handleErrors(err, req, res, next) {
   console.error(chalk.red(err))
   res.status(500).json(err)
}

module.exports = handleErrors
