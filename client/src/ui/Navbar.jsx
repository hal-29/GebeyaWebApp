import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {
   const dispatch = useDispatch()
   const account = useSelector(store => store.auth.account)

   return (
      <nav className='col-start-2 col-end-3 px-10 h-min backdrop-blur shadow-sm bg-gray-200/50'>
         <div className='flex justify-between py-4  mx-auto'>
            <div className='inline-flex gap-4'>
               <Link to='/' className='text-xl btn btn-sm btn-ghost'>
                  E-market
               </Link>
            </div>
            <div className='join w-80'>
               <input
                  className='input-sm input-bordered join-item rounded-l-full grow'
                  placeholder='Search'
               />
               <button className='btn btn-sm join-item rounded-r-full'>
                  <span className='fa-solid fa-magnifying-glass font-bold text-2xl color-neutral'></span>
               </button>
            </div>
            <div className='flex gap-3 items-center font-semibold'>
               {!account && (
                  <Link to='/signin' className='border-r-2 px-4'>
                     <span className='fa-solid fa-user'></span> Sign Up/Sign In
                  </Link>
               )}
               <Link to='/cart' className='px-4'>
                  <span className='fa-cart-shopping fa-solid'></span> Cart
               </Link>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
