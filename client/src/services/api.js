import axios from 'axios'
axios.defaults.withCredentials = true

// const BASE_URL = `${
//    import.meta.env.VITE_SERVER_DOMAIN || process.env.VITE_SERVER_DOMAIN
// }/api/`
const BASE_URL = 'https://emarket-api-zaoh.onrender.com/api'

const headers = {
   'Content-Type': 'application/json',
}

const api = {
   get: async endpoint => {
      try {
         const response = await axios.get(`${BASE_URL}/${endpoint}`)
         return response.data
      } catch (error) {
         throw handleError(error)
      }
   },

   post: async (endpoint, data) => {
      try {
         const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
            headers,
         })
         return response.data
      } catch (error) {
         throw handleError(error)
      }
   },

   put: async (endpoint, data) => {
      try {
         const response = await axios.put(`${BASE_URL}/${endpoint}`, data, {
            headers,
         })
         return response.data
      } catch (error) {
         throw handleError(error)
      }
   },

   delete: async endpoint => {
      try {
         const response = await axios.delete(`${BASE_URL}/${endpoint}`, {
            headers,
         })
         return response.data
      } catch (error) {
         throw handleError(error)
      }
   },
}

const handleError = error => {
   console.log(error)
   if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'Something went wrong')
   } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from the server')
   } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error setting up the request')
   }
}

export default api
