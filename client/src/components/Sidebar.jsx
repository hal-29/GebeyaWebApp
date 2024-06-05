import { useEffect, useRef } from 'react'
import CartItem from './CartItem'
import PropTypes from 'prop-types'

Sidebar.propTypes = {
   isOpen: PropTypes.bool,
   setIsOpen: PropTypes.func,
}

function Sidebar({ isOpen, setIsOpen }) {
   const sidebarEl = useRef(null)

   useEffect(() => {
      window.addEventListener(
         'click',
         e => {
            if (sidebarEl.current && !sidebarEl.current.contains(e.target)) {
               setIsOpen(false)
            }
         },
         true
      )
   }, [isOpen, setIsOpen])

   return (
      <aside
         ref={sidebarEl}
         className={`top-12 fixed z-20  flex flex-col gap-2 bg-white shadow-md p-4 w-80 h-[calc(100svh_-3rem)] transition-all sidebar ${
            isOpen ? 'right-0' : '-right-full'
         }`}
      >
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
