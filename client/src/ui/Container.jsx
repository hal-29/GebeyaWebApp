import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../features/auth/authSlice'
import { fetchWishlists } from '../features/wishlists/wishlistSlice'
import { fetchPhones } from '../features/dashboard/homeSlice'

function Container({ children }) {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(authenticate())
      dispatch(fetchWishlists())
      dispatch(fetchPhones(10))
   }, [dispatch])

   return (
      <div className='grid grid-cols-[14rem_1fr] grid-rows-[min-content_1fr_min-content] min-h-screen'>
         {children}
      </div>
   )
}

export default Container
