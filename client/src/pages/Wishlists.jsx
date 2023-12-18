import { useEffect } from 'react'
import Wishlist from '../features/wishlists/Wishlist'

function Wishlists() {
   useEffect(() => {
      document.title = 'Wishlists'
   })
   return <Wishlist />
}
export default Wishlists
