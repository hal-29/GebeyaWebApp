import { NavLink, Outlet } from 'react-router-dom'

function ProfileItem() {
   return (
      <div className='max-w-6xl grow rounded-xl overflow-hidden border mx-auto flex'>
         <div className='bg-gray-700 p-6'>
            <div className='flex flex-col gap-4 w-52'>
               <div className='self- flex flex-col  items-center'>
                  <div className='w-24 h-24 overflow-hidden rounded-full'>
                     <img
                        className='h-full w-full object-cover'
                        src='https://www.electricallicenserenewal.com/app-assets/images/user/12.jpg'
                        alt='user'
                     />
                  </div>
                  <h2 className='text-xl font-bold text-gray-100'>Jane Doe</h2>
               </div>
               <NavLink
                  to=''
                  className='px-4 py-1 font-lg text-gray-100 bg-gray-100/10 rounded-md hover:bg-gray-100/40'
               >
                  About
               </NavLink>
               <NavLink
                  to='wishlist'
                  className='px-4 py-1 font-lg text-gray-100 bg-gray-100/10 rounded-md hover:bg-gray-100/40'
               >
                  Wishlist
               </NavLink>
               <NavLink
                  to='orders'
                  className='px-4 py-1 font-lg text-gray-100 bg-gray-100/10 rounded-md hover:bg-gray-100/40'
               >
                  Orders
               </NavLink>
               <NavLink
                  to='records'
                  className='px-4 py-1 font-lg text-gray-100 bg-gray-100/10 rounded-md hover:bg-gray-100/40'
               >
                  Records
               </NavLink>
               <NavLink
                  to='update'
                  className='px-4 py-1 font-lg text-gray-100 bg-gray-100/10 rounded-md hover:bg-gray-100/40'
               >
                  Update Profile
               </NavLink>
            </div>
         </div>
         <div className='bg-gray-300 grow p-6'>
            <Outlet />
         </div>
      </div>
   )
}
export default ProfileItem
