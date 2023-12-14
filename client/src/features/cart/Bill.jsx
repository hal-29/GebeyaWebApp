/* eslint-disable react/prop-types */
import { loadStripe } from '@stripe/stripe-js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../../ui/Button'
import api from '../../services/api'

function Bill({ sumOfPrice, shipping, tax }) {
   const cartItems = useSelector(store => store.cart.cartItems)

   const makePayment = async () => {
      const stripe = await loadStripe(
         'pk_test_51ON0LMII6xQagM00wjc9ZCB2x1rWCb6SIVdiB9C5vU0uKe4Oeyu7nTIeKlcslbk1XcEbDhKXX2q0QKYVb3OUKvGC00kuzhUu3x'
      )
      const session = await api.post('order', { products: cartItems })
      const result = stripe.redirectToCheckout({
         sessionId: session.id,
      })
      if (result.error) {
         console.log(result.error)
      }
   }

   return (
      <div className='p-6 flex flex-col bg-gray-200 rounded-lg basis-1/3 shrink-0'>
         <div className='flex justify-between py-3 border border-b-2 border-b-gray-800'>
            <div>Subtotal</div>
            <div>${sumOfPrice}</div>
         </div>
         <div className='flex justify-between py-3 border border-b-2 border-b-gray-800'>
            <div>Shipping</div>
            <div>${shipping}</div>
         </div>
         <div className='flex justify-between py-3 border border-b-2 border-b-gray-800'>
            <div>Tax</div>
            <div>${tax}</div>
         </div>
         <div className='flex justify-between py-3 border border-b-2 border-b-gray-800 font-bold'>
            <div>Order total</div>
            <div>${Number(+sumOfPrice + +shipping + +tax).toFixed(2)}</div>
         </div>
         <div className='py-4 flex flex-col items-center'>
            <Button label='Proceed to payment' onClick={makePayment} />
            <Link to='/' className='text-primary'>
               or Continue Shopping
            </Link>
         </div>
      </div>
   )
}
export default Bill
