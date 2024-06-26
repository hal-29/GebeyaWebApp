import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'
import Wrapper from './Wrapper'
import { TiShoppingCart } from 'react-icons/ti'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { useEffect, useState } from 'react'

Navbar.propTypes = {
   setIsOpen: PropTypes.func,
}

function Navbar({ setIsOpen }) {
   const [isAuthenticated, setIsAuthenticated] = useState(true)

   return (
      <nav className='top-0 z-50 sticky bg-white py-2 border-red-800/20 border-b text-gray-800/90 text'>
         <Wrapper className='flex items-center gap-3'>
            <div className='flex items-end gap-1'>
               <div className='bg-green-400/20 rounded-full w-8 h-8'></div>
               <p>John Doe</p>
            </div>
            <div className='flex mx-auto min-w-[30rem] max-w-md'>
               <input
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Search our catalog'
                  className='px-4 py-2 border focus:outline-none grow'
               />
               <button className='bg-red-800 px-6 text-gray-100 text-xl'>
                  <PiMagnifyingGlassBold />
               </button>
            </div>
            <NavLink to='/' className='[&.active]:text-red-800/80'>
               Home
            </NavLink>
            <NavLink to='/products' className='[&.active]:text-red-800/80'>
               Products
            </NavLink>
            <NavLink to='/wishlist' className='[&.active]:text-red-800/80'>
               Wishlist
            </NavLink>
            <NavLink to='/orders' className='[&.active]:text-red-800/80'>
               Orders
            </NavLink>

            <div
               className='box-border flex gap-1 px-3 py-1 pl-2 border border-red-800 text-red-800 cursor-pointer'
               onClick={() => setIsOpen(prv => !prv)}
            >
               Carts
               <span className='text-2xl'>
                  <TiShoppingCart />
               </span>
            </div>
            <div>
               {isAuthenticated ? (
                  <a href='/logout'>
                     <button
                        className='bg-gray-800 px-2 py-1 border text-white transition-all duration-200'
                        // onClick={() => logout()}
                     >
                        Sign out
                     </button>
                  </a>
               ) : (
                  <a href='/login'>
                     <button
                        className='bg-gray-800 px-2 py-1 border text-white transition-all duration-200'
                        // onClick={() => login()}
                     >
                        Sign in
                     </button>
                  </a>
               )}
            </div>
         </Wrapper>
      </nav>
   )
}
export default Navbar
