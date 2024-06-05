import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'
import Wrapper from './Wrapper'
import Auth from '../pages/Auth'

function Container() {
   const [showAuth, setShowAuth] = useState(false)
   const [isOpen, setIsOpen] = useState(false)

   return (
      <>
         <Navbar setIsOpen={setIsOpen} setShowAuth={setShowAuth} />
         <Auth showAuth={showAuth} setShowAuth={setShowAuth} />
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
         <Wrapper
            className={`${isOpen || showAuth ? 'blur-sm brightness-75' : ''}`}
         >
            <Outlet />
         </Wrapper>
         <Footer
            className={`${isOpen || showAuth ? 'blur-sm brightness-75' : ''}`}
         />
      </>
   )
}
export default Container
