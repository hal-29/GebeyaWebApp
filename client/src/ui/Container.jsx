import { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../features/auth/authSlice'
import { fetchWishlists } from '../features/wishlists/wishlistSlice'
import { fetchPhones } from '../features/dashboard/homeSlice'

export const NavContext = createContext()

function Container({ children }) {
   const [openNav, setOpenNav] = useState(false)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(authenticate())
      dispatch(fetchWishlists())
      dispatch(fetchPhones(10))
   }, [dispatch])

   // <div className='grid  grid-rows-[min-content_1fr_min-content] min-h-screen'>
   return (
      <NavContext.Provider value={{ openNav, setOpenNav }}>
         <div className='grid grid-cols-1 lg:grid-cols-[14rem_1fr] grid-rows-[min-content_1fr_min-content] min-h-screen relative'>
            {children}
         </div>
      </NavContext.Provider>
   )
}

export default Container
