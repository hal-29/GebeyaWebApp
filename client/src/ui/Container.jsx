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
         <Wrapper>
            <Outlet />
         </Wrapper>
         <Footer />
      </>
   )
}
export default Container
