import { NavLink, useNavigate } from 'react-router-dom'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function SideNav() {
   const navigate = useNavigate()
   const account = useSelector(store => store.auth.account)
   const dispatch = useDispatch()

   const logoutHandler = async () => {
      await dispatch(logout())
      navigate('/signin')
   }

   return (
      <aside className='row-start-1 row-end-3 h-screen pt-20 flex flex-col items-center gap-6 bg-gray-200/80 backdrop-blur-lg transition-all duration-300 '>
         <div className='self- flex flex-col  items-center'>
            <div className='w-24 h-24 overflow-hidden rounded-full'>
               <img
                  className='h-full w-full object-cover'
                  src='https://www.electricallicenserenewal.com/app-assets/images/user/12.jpg'
                  alt='user'
               />
            </div>
            <h2 className='text-xl font-bold text-gray-800'>John Doe</h2>
         </div>
         <ul className='px-4 inline-flex w-full max-w-[12rem] flex-col gap-2 font-semibold'>
            <NavLink
               to='/'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               Home
            </NavLink>
            <NavLink
               to='/profile'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               Profile
            </NavLink>
            <NavLink
               to='/wishlist'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               Wishlist
            </NavLink>
            <NavLink
               to='/orders'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               Orders
            </NavLink>
            <NavLink
               to='/records'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               Records
            </NavLink>

            {account && <Button label='Logout' onClick={logoutHandler} />}
         </ul>
      </aside>
   )
}
export default SideNav
