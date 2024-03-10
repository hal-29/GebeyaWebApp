import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'

function Container() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div>
         <Navbar />
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
         <Outlet />
         <Footer />
      </div>
   )
}
export default Container
