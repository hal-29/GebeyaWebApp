import { useCallback, useEffect, useRef } from 'react'
import CartItem from './CartItem'
import PropTypes from 'prop-types'
import useCart from '../store/useCart'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'
import useAuth from '../store/useAuth'

Sidebar.propTypes = {
   isOpen: PropTypes.bool,
   setIsOpen: PropTypes.func,
}

function Sidebar({ isOpen, setIsOpen }) {
   const sidebarEl = useRef(null)
   const cartItems = useCart(state => state.items)
   const user = useAuth(state => state.user)

   const onCheckout = async () => {
      const checkoutFormat = cartItems.map(item => ({
         id: item.product.id,
         quantity: item.quantity,
      }))

      try {
         const res = await api.post(endpoints.createOrder(), {
            products: checkoutFormat,
         })
         console.log(res)
         if (res.url) window.location.href = res.url
      } catch (error) {
         console.error(error)
      }
   }

   const subTotal = useCallback(() => {
      return cartItems.reduce(
         (acc, item) => acc + item.product.price * item.quantity,
         0
      )
   }, [cartItems])

   useEffect(() => {
      const handler = e => {
         if (sidebarEl.current && !sidebarEl.current.contains(e.target)) {
            setIsOpen(false)
         }
      }
      window.addEventListener('click', handler, true)

      return () => {
         window.removeEventListener('click', handler, true)
      }
   }, [isOpen, setIsOpen])

   return (
      <aside
         ref={sidebarEl}
         className={`top-12 fixed z-20  flex flex-col gap-2 bg-white shadow-md p-4 w-80 h-[calc(100svh_-3rem)] transition-all sidebar ${
            isOpen ? 'right-0' : '-right-full'
         }`}
      >
         <h2 className='py-2 border-b font-semibold'>
            {cartItems.length
               ? `There are ${cartItems.length} items in cart`
               : 'Cart is empty'}
         </h2>
         <div className='flex flex-col gap-2 border-b overflow-auto grow'>
            {cartItems.map(item => (
               <CartItem key={item.product.id} item={item} />
            ))}
         </div>
         <div className='flex justify-between py-4 border-b'>
            <span className='font-semibold'>Sub Total:</span>
            <span>Rs. {Number(subTotal()).toFixed(2)}</span>
         </div>
         <div className='flex flex-col gap-4 py-3'>
            <button
               onClick={onCheckout}
               disabled={!cartItems.length || !user}
               className={` p-3 text-gray-50 ${
                  cartItems.length && user
                     ? 'bg-red-800/90'
                     : 'bg-red-800/40 cursor-not-allowed'
               }`}
            >
               Checkout
            </button>
         </div>
      </aside>
   )
}
export default Sidebar
