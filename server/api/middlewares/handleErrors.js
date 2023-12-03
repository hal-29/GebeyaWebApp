function handleErrors(err, req, res, next) {
   console.trace('mdwr -->', err)
   res.status(500).json(err)
}

module.exports = handleErrors
