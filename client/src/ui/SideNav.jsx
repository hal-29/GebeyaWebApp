import { NavLink } from 'react-router-dom'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav } from '../navSlice'

function SideNav() {
   const isNavOpened = useSelector(store => store.navbar.isNavOpened)
   const dispatch = useDispatch()

   return (
      <aside
         className={`fixed w-full h-screen max-w-xs bg-gray-100/80 backdrop-blur-lg z-[9999] top-0 pt-24 transition-all duration-300 shadow-md ${
            isNavOpened ? 'left-0' : '-left-full'
         }`}
      >
         <span
            onClick={() => dispatch(closeNav())}
            className='absolute top-4 right-4 px-2 rounded-full text-lg cursor-pointer bg-gray-200'
         >
            <span className='fa-solid fa-xmark'></span>
         </span>
         <ul className='px-10 flex flex-col gap-4 text-lg font-semibold'>
            <NavLink
               to='/'
               className='bg-gray-600/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-gray-100'
            >
               Home
            </NavLink>
            <NavLink
               to='/profile'
               className='bg-gray-600/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-gray-100'
            >
               Profile
            </NavLink>

            <Button label='Logout' />
         </ul>
      </aside>
   )
}
export default SideNav
