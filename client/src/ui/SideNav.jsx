import { Link, NavLink, useNavigate } from 'react-router-dom'
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
         {account ? (
            <div className='self- flex flex-col  items-center'>
               <div className='w-24 h-24 overflow-hidden rounded-full'>
                  {account.avatar ? (
                     <img
                        className='h-full w-full object-cover'
                        src={account.avatar}
                        alt={account.name}
                     />
                  ) : (
                     <div className='h-full w-full text-6xl flex justify-center items-center'>
                        <span className='fa-solid fa-user'></span>
                     </div>
                  )}
               </div>
               <h2 className='text-xl font-bold text-gray-800'>
                  {account.name}
               </h2>
            </div>
         ) : (
            <div className='w-24 h-24'>
               <Link to='signup'>Login or Signup to your account</Link>
            </div>
         )}
         <ul className='px-4 inline-flex w-full max-w-[12rem] flex-col gap-2 font-semibold'>
            <NavLink
               to='/'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-house'></span>
               Home
            </NavLink>
            <NavLink
               to='/profile'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-user'></span>
               Profile
            </NavLink>
            <NavLink
               to='/wishlist'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-bookmark'></span>
               Wishlist
            </NavLink>
            <NavLink
               to='/orders'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-bag-shopping'></span>
               Orders
            </NavLink>
            <NavLink
               to='/records'
               className='bg-gray-600/10 px-4 py-1 rounded-md cursor-pointer max-w-[10rem] hover:bg-gray-600 hover:text-gray-100'
            >
               <span className='pr-2 text-lg fa-solid fa-folder-open'></span>
               Records
            </NavLink>

            {account && <Button label='Logout' onClick={logoutHandler} />}
         </ul>
      </aside>
   )
}
export default SideNav
