import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

function Checkout() {
   const cartItems = useSelector(store => store.cart.cartItems)
   const sumOfPrice = cartItems.reduce(
      (prev, item) => (prev += item.price * item.count),
      0
   )
   const shipping = (sumOfPrice * 0.02).toFixed(2)
   const tax = (sumOfPrice * 0.15).toFixed(2)

   return (
      <section className='bg-gray-100/50 border rounded-2xl max-h-[80vh] p-4 flex gap-4 max-w-6xl mx-auto'>
         <div className='flex flex-col gap-3 px-2  grow overflow-y-auto'>
            {cartItems.map(item => (
               <CartItem key={item.id} item={item} />
            ))}
         </div>
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
               <Button label='Proceed to payment' />
               <Link to='/' className='text-primary'>
                  or Continue Shopping
               </Link>
            </div>
         </div>
      </section>
   )
}
export default Checkout
