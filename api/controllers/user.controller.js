const sendResponse = require('../../utils/formatResponse')

function getUserInfo(req, res) {
   const user = req.user
   delete user.password
   res.json(sendResponse({ data: user }))
}

module.exports = {
   getUserInfo,
}
