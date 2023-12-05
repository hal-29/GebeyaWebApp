import { useEffect, useState } from 'react'
import api from '../services/api'

function useFetch({ url, method = 'get', payload = {} }) {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      let isMounted = true
      async function makeRequest() {
         try {
            setLoading(true)

            let response = {}
            if (method === 'get') {
               response = await api.get(url)
            } else if (method === 'post') {
               response = await api.post(url, payload)
            }

            if (isMounted) {
               setData(response.data)
            }
         } catch (err) {
            setError(err)
         } finally {
            if (isMounted) {
               setLoading(false)
            }
         }
      }

      makeRequest()

      // Cleanup function to cancel the request on unmount
      return () => {
         isMounted = false
      }
   }, [url, method, payload])

   return { data, loading, error }
}

export default useFetch
