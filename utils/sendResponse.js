function sendResponse({ data, error }) {
   if (error)
      return {
         data: null,
         error: error.message || error,
      }

   return {
      data: data,
      error: null,
   }
}

module.exports = sendResponse
