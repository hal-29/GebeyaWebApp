import { Outlet } from 'react-router-dom'
import About from '../features/profile/About'
import { useEffect } from 'react'

function Profile() {
   useEffect(() => {
      document.title = 'Profile'
   })
   return (
      <>
         <About />
         <Outlet />
      </>
   )
}
export default Profile
