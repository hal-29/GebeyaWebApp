import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'
import Wrapper from './Wrapper'

function Container() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <>
         <Navbar setIsOpen={setIsOpen} />
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
         <Wrapper className={`${isOpen ? 'blur-sm brightness-75' : ''}`}>
            <Outlet />
         </Wrapper>
         <Footer className={`${isOpen ? 'blur-sm brightness-75' : ''}`} />
      </>
   )
}
export default Container
