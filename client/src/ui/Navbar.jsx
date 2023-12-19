import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchInput from './SearchInput'
import { useContext } from 'react'
import { NavContext } from './Container'

function Navbar() {
   const account = useSelector(store => store.auth.account)
   const cartItems = useSelector(store => store.cart.cartItems)
   const { openNav, setOpenNav } = useContext(NavContext)

   return (
      <nav className='col-start-1 col-end-2 lg:col-start-2 lg:col-end-3  px-4 h-min backdrop-blur shadow-sm bg-gray-200/50 flex items-center gap-2'>
         <div className='lg:hidden' onClick={() => setOpenNav(pr => !pr)}>
            <button className='relative group'>
               <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-gray-200 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
                  <div
                     className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden ${
                        openNav && '-rotate-180'
                     }`}
                  >
                     <div
                        className={`bg-black h-[2px] w-7 transform transition-all duration-500 -translate-x-1 ${
                           openNav && 'rotate-45'
                        }`}
                     ></div>
                     <div className='bg-black h-[2px] w-7 rounded transform transition-all duration-500 '></div>
                     <div
                        className={`bg-black h-[2px] w-7 transform transition-all duration-500 -translate-x-1 ${
                           openNav && '-rotate-45'
                        }`}
                     ></div>
                  </div>
               </div>
            </button>
         </div>
         <div className='flex justify-end md:justify-between grow pb-2 pt-4  mx-auto flex-wrap gap-2  sm:py-4'>
            <div className='gap-4 -order-4 hidden md:inline-flex'>
               <Link to='/' className='text-xl btn btn-sm btn-ghost'>
                  <span className='w-16 h-8 overflow-hidden'>
                     <img src='lg.png' alt='logo' className='w-full h-full ' />
                  </span>
                  <span className='hidden md:block'>Emarket</span>
               </Link>
            </div>
            <div className='flex gap-3 items-center font-semibold sm:order-2 md-auto '>
               {!account && (
                  <Link to='/signin' className='border-r-2 px-4'>
                     <span className='fa-solid fa-user'></span> Sign Up/Sign In
                  </Link>
               )}
               <Link
                  to='/cart'
                  className='px-4 indicator  flex items-center gap-2'
               >
                  {!!cartItems.length && (
                     <span className='indicator-item badge badge-secondary '>
                        {cartItems.length}
                     </span>
                  )}
                  <span className='fa-cart-shopping fa-solid'></span>{' '}
                  <span>Cart</span>
               </Link>
            </div>
            <SearchInput />
         </div>
      </nav>
   )
}

export default Navbar
