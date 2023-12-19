import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/auth/authSlice'
import { useContext } from 'react'
import { NavContext } from './Container'

function SideNav() {
   const navigate = useNavigate()
   const account = useSelector(store => store.auth.account)
   const dispatch = useDispatch()
   const { openNav, setOpenNav } = useContext(NavContext)

   const logoutHandler = () => {
      setOpenNav(false)
      dispatch(logoutUser())
      navigate('/signin')
   }

   return (
      <aside
         className={`row-start-1 row-end-3 h-screen pt-20 flex flex-col items-center gap-6 bg-gray-200/80 backdrop-blur-lg transition-all duration-300 w-full max-w-md absolute top-0 z-[1000] lg:relative lg:left-0 ${
            openNav ? 'left-0' : '-left-full'
         } `}
      >
         <span
            onClick={() => setOpenNav(false)}
            className='w-8 h-8 rounded-full flex justify-center items-center absolute top-6 right-6 bg-gray-400/60 lg:hidden'
         >
            <span className='fa-solid fa-xmark font-bold text-xl'></span>
         </span>
         {account ? (
            <div className='self- flex flex-col  items-center'>
               <div className='w-24 h-24 overflow-hidden rounded-full'>
                  <img
                     className='h-full w-full object-cover'
                     src={account.avatar}
                     alt={account.name}
                  />
               </div>
               <h2 className='text-xl font-bold text-gray-800'>
                  {account.name}
               </h2>
            </div>
         ) : (
            <div className='w-24 h-24'>
               <Link to='signin'>Login or Signup to your account</Link>
            </div>
         )}
         <ul className='px-4 inline-flex w-full max-w-[12rem] flex-col gap-2 font-semibold '>
            <NavLink
               onClick={() => setOpenNav(false)}
               to='/'
               className=' navlink px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-400 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-house'></span>
               Home
            </NavLink>
            <NavLink
               onClick={() => setOpenNav(false)}
               to='/profile'
               className=' navlink px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-400 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-user'></span>
               Profile
            </NavLink>
            <NavLink
               onClick={() => setOpenNav(false)}
               to='/wishlist'
               className=' navlink px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-400 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-bookmark'></span>
               Wishlist
            </NavLink>
            <NavLink
               onClick={() => setOpenNav(false)}
               to='/orders'
               className=' navlink px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-400 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-bag-shopping'></span>
               Orders
            </NavLink>

            {account && <Button label='Logout' onClick={logoutHandler} />}
         </ul>
      </aside>
   )
}
export default SideNav
