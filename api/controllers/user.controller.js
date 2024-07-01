const sendResponse = require('../../utils/sendResponse')

function getUserInfo(req, res) {
   const user = req.user
   res.json(sendResponse({ data: user }))
}

module.exports = {
   getUserInfo,
}
