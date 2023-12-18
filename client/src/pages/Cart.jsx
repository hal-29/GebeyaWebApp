import { useEffect } from 'react'
import Checkout from '../features/cart/Checkout'

function Cart() {
   useEffect(() => {
      document.title = 'Carts'
   })
   return (
      <main className='min-h-screen p-1'>
         <Checkout />
      </main>
   )
}

export default Cart
