import { PropTypes } from 'prop-types'
import { NavLink, useNavigate } from 'react-router-dom'
import Wrapper from './Wrapper'
import { TiShoppingCart } from 'react-icons/ti'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import useAuth from '../store/useAuth'
import useCart from '../store/useCart'
import { useEffect, useRef, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

Navbar.propTypes = {
   setIsOpen: PropTypes.func,
   setShowAuth: PropTypes.func,
   showAuth: PropTypes.bool,
   isOpen: PropTypes.bool,
   navOpen: PropTypes.bool,
   setNavOpen: PropTypes.func,
}

function Navbar({
   setIsOpen,
   setShowAuth,
   isOpen,
   navOpen,
   setNavOpen,
   showAuth,
}) {
   const { user, logout } = useAuth(store => store)
   const items = useCart(store => store.items)
   const [search, setSearch] = useState('')
   const navigate = useNavigate()
   const NavEl = useRef(null)

   const handleSearch = e => {
      e.preventDefault()
      if (search) {
         navigate(`/products?q=${search}`)
         setSearch('')
      }
   }

   useEffect(() => {
      const handler = e => {
         if (NavEl.current && !NavEl.current.contains(e.target)) {
            setNavOpen(false)
         }
      }
      document.addEventListener('mousedown', handler, true)
      return () => document.removeEventListener('mousedown', handler, true)
   }, [setNavOpen])

   const onNavClick = () => {
      setNavOpen(false)
   }

   return (
      <nav className='top-0 left-0 z-50 sticky bg-white py-2 border-red-800/20 border-b w-full text-gray-800/90 text'>
         <Wrapper className='lg:flex items-center gap-3 hidden'>
            {user && (
               <div className='flex items-end gap-1'>
                  <div className='bg-green-400/20 rounded-full w-8 h-8'></div>
                  <p>{user.name}</p>
               </div>
            )}
            <form
               onClick={handleSearch}
               className='flex mx-auto min-w-[20rem] md:min-w-[30rem] max-w-md'
            >
               <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Search our catalog'
                  className='px-4 py-2 border focus:outline-none grow'
               />
               <button
                  type='submit'
                  className='bg-red-800 px-6 text-gray-100 text-xl'
               >
                  <PiMagnifyingGlassBold />
               </button>
            </form>
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
               className='relative box-border flex gap-1 px-3 py-1 pl-2 border border-red-800 text-red-800 cursor-pointer'
               onClick={() => setIsOpen(prv => !prv)}
            >
               Carts
               <span className='text-2xl'>
                  <TiShoppingCart />
               </span>
               {!!items.length && (
                  <span className='-top-2 -right-2 absolute flex justify-center items-center bg-red-800 rounded-full w-5 h-5 text-white text-xs'>
                     {items.length}
                  </span>
               )}
            </div>
            <div>
               {user ? (
                  <button
                     onClick={logout}
                     className='bg-gray-800 px-2 py-1 border text-white transition-all duration-200'
                  >
                     Sign out
                  </button>
               ) : (
                  <button
                     onClick={() => setShowAuth(true)}
                     className='bg-gray-800 px-2 py-1 border text-white transition-all duration-200'
                  >
                     Sign in
                  </button>
               )}
            </div>
         </Wrapper>
         <Wrapper className='relative lg:hidden'>
            <section className='flex gap-2'>
               <button
                  onClick={() => {
                     setNavOpen(true)
                  }}
                  className='text-2xl'
               >
                  <FaBars />
               </button>
               <form
                  onClick={handleSearch}
                  className='flex mx-auto max-w-md grow'
               >
                  <input
                     value={search}
                     onChange={e => setSearch(e.target.value)}
                     type='search'
                     name='search'
                     id='search'
                     placeholder='Search our catalog'
                     className='px-4 py-2 border w-full focus:outline-none grow'
                  />
                  <button
                     type='submit'
                     className='bg-red-800 px-6 text-gray-100 text-xl'
                  >
                     <PiMagnifyingGlassBold />
                  </button>
               </form>
               <div
                  className='relative box-border flex justify-center items-center px-2 border border-red-800 text-red-800 cursor-pointer'
                  onClick={() => setIsOpen(prv => !prv)}
               >
                  <span className='text-2xl'>
                     <TiShoppingCart />
                  </span>
                  {!!items.length && (
                     <span className='-top-2 -right-2 absolute flex justify-center items-center bg-red-800 rounded-full w-5 h-5 text-white text-xs'>
                        {items.length}
                     </span>
                  )}
               </div>
            </section>
            <section
               ref={NavEl}
               className={`top-0 transition-all  absolute flex flex-col gap-3 bg-white px-10 py-16 w-full max-w-sm h-svh ${
                  navOpen && !isOpen && !showAuth ? 'left-0' : '-left-full'
               }`}
            >
               <button
                  onClick={() => {
                     setNavOpen(false)
                  }}
                  className='top-4 right-4 absolute flex justify-center items-center bg-gray-200 rounded-full w-8 h-8 text-red-800'
               >
                  <FaXmark />
               </button>
               {user && (
                  <div className='flex items-end gap-1'>
                     <div className='bg-green-400/20 rounded-full w-8 h-8'></div>
                     <p>{user.name}</p>
                  </div>
               )}
               <NavLink
                  to='/'
                  onClick={onNavClick}
                  className='[&.active]:text-red-800/80'
               >
                  Home
               </NavLink>
               <NavLink
                  to='/products'
                  onClick={onNavClick}
                  className='[&.active]:text-red-800/80'
               >
                  Products
               </NavLink>
               <NavLink
                  to='/wishlist'
                  onClick={onNavClick}
                  className='[&.active]:text-red-800/80'
               >
                  Wishlist
               </NavLink>
               <NavLink
                  to='/orders'
                  onClick={onNavClick}
                  className='[&.active]:text-red-800/80'
               >
                  Orders
               </NavLink>

               <div>
                  {user ? (
                     <button
                        onClick={logout}
                        className='bg-gray-800 px-2 py-1 border text-white transition-all duration-200'
                     >
                        Sign out
                     </button>
                  ) : (
                     <button
                        onClick={() => setShowAuth(true)}
                        className='bg-gray-800 px-2 py-1 border text-white transition-all duration-200'
                     >
                        Sign in
                     </button>
                  )}
               </div>
            </section>
         </Wrapper>
      </nav>
   )
}
export default Navbar
