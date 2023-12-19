/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { storage } from '../../firebase'
import { getDownloadURL, ref } from 'firebase/storage'

function Image({ src, alt, className }) {
   const [imageUrl, setImageUrl] = useState('')
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      const imageRef = ref(storage, `products/${src}`)

      const fetchImageLink = async () => {
         try {
            setLoading(true)
            const url = await getDownloadURL(imageRef)
            setImageUrl(url)
         } catch (err) {
            console.error(err)
         } finally {
            setLoading(false)
         }
      }
      fetchImageLink()
   }, [src])
   if (loading) return <div>loading...</div>
   return <img src={imageUrl} alt={alt} className={className} />
}

export default Image
