import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openNav } from '../navSlice'

function Navbar() {
   const dispatch = useDispatch()
   const account = useSelector(store => store.auth.account)

   return (
      <nav className=' fixed top-0 left-0 px-4 w-full backdrop-blur shadow-sm z-[1000] bg-gray-200/50'>
         <div className='flex justify-between py-4  max-w-6xl mx-auto'>
            <div className='inline-flex gap-4'>
               <span
                  onClick={() => dispatch(openNav())}
                  className='fa-solid fa-bars btn btn-sm btn-square text-xl'
               ></span>
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
