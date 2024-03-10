import CartItem from './CartItem'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

function Sidebar({ isOpen, setIsOpen }) {
   return (
      <aside
         className={`top-0 fixed flex flex-col gap-2 bg-white shadow-md p-4 w-80 h-full transition-all ${
            isOpen ? 'right-0' : '-right-full'
         }`}
      >
         <div className='flex'>
            <span
               className='text-2xl hover:text-red-400 leading-none cursor-pointer'
               onClick={() => setIsOpen(false)}
            >
               <FaAngleRight />
            </span>
         </div>
         <h2 className='py-2 border-b font-semibold'>There are 3 products</h2>
         <div className='flex flex-col gap-2 border-b overflow-auto grow'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
         </div>
         <div className='flex justify-between py-4 border-b'>
            <span className='font-semibold'>Sub Total:</span>
            <span>Rs. 592.00</span>
         </div>
         <div className='flex flex-col gap-4 py-3'>
            <button className='bg-red-800/90 p-3 text-gray-50'>
               View Cart
            </button>
            <button className='bg-red-800/90 p-3 text-gray-50'>Checkout</button>
         </div>
      </aside>
   )
}
export default Sidebar
