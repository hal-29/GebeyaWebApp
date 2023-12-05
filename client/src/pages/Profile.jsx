import { Outlet } from 'react-router-dom'
import About from '../features/profile/About'

function Profile() {
   return (
      <>
         <About />
         <Outlet />
      </>
   )
}
export default Profile
