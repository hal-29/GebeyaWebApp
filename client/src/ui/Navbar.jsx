import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'
import Wrapper from './Wrapper'
import { TiShoppingCart } from 'react-icons/ti'
import { PiMagnifyingGlassBold } from 'react-icons/pi'

Navbar.propTypes = {
   setIsOpen: PropTypes.func,
}

function Navbar({ setIsOpen }) {
   return (
      <nav className='top-0 z-50 sticky bg-white py-2 border-red-800/20 border-b text-gray-800/90 text'>
         <Wrapper className='flex  items-center gap-3'>
            <h4 className=''>welcome to electonic store</h4>
            <div className='flex max-w-md mx-auto min-w-[30rem]'>
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
            <NavLink to='/history' className='[&.active]:text-red-800/80'>
               History
            </NavLink>
            <NavLink to='/profile' className='[&.active]:text-red-800/80'>
               Profile
            </NavLink>

            <div
               className='flex gap-1 pl-2 text-red-800/90 cursor-pointer'
               onClick={() => setIsOpen(prv => !prv)}
            >
               Carts
               <span className='text-2xl'>
                  <TiShoppingCart />
               </span>
            </div>
         </Wrapper>
      </nav>
   )
}
export default Navbar
