function formatResponse(payload) {
   return {
      ...payload,
      status: payload.status || 200,
      error: payload.error || null,
      data: payload.data || null,
   }
}

module.exports = formatResponse
