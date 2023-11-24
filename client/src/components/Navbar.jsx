import { Link } from 'react-router-dom'

function Navbar() {
   return (
      <nav className='flex justify-between py-4 border-b-2'>
         <div className='inline-flex gap-4'>
            <span className='fa-solid fa-bars btn btn-square text-2xl'></span>
            <Link to='/' className='text-2xl btn btn-ghost'>
               E-market
            </Link>
         </div>
         <div className='join'>
            <input
               className='input input-bordered join-item rounded-l-full'
               placeholder='Search'
            />
            <button className='btn join-item rounded-r-full'>
               <span className='fa-solid fa-magnifying-glass font-bold text-2xl color-neutral'></span>
            </button>
         </div>
         <div className='flex gap-3 items-center font-semibold'>
            <Link to='/signin' className='border-r-2 px-4'>
               <span className='fa-solid fa-user'></span> Sign Up/Sign In
            </Link>
            <Link to='/cart' className='px-4'>
               <span className='fa-cart-shopping fa-solid'></span> Cart
            </Link>
         </div>
      </nav>
   )
}

export default Navbar
