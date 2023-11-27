import { useEffect, useState } from 'react'
import axios from '../config/axios-config'

function useFetch({
   url,
   method = 'get',
   payload = {},
   contentType = 'application/json',
   headers: customHeaders = {},
}) {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      let isMounted = true
      const source = axios.CancelToken.source()

      async function makeRequest() {
         try {
            setLoading(true)
            const response = await axios[method](
               url,
               {
                  ...payload,
                  cancelToken: source.token,
               },
               {
                  headers: {
                     'Content-Type': contentType,
                     ...customHeaders,
                  },
               }
            )

            if (isMounted) {
               setData(response.data)
            }
         } catch (err) {
            if (axios.isCancel(err)) {
               console.error('Request canceled', err.message)
            } else {
               setError(err)
            }
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
         source.cancel('Request canceled on component unmount.')
      }
   }, [url, method, payload, contentType, customHeaders])

   return { data, loading, error }
}

export default useFetch
