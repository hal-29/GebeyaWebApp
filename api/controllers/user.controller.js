function getUserInfo(req, res) {
   res.json(req.user)
}

module.exports = {
   getUserInfo,
}
