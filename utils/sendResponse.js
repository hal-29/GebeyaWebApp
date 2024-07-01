function sendResponse({ data, error, token }) {
   if (error)
      return {
         data: null,
         error: error.message || error,
      }

   return {
      data,
      error: null,
      token,
   }
}

module.exports = sendResponse
