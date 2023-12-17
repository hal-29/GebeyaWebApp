import { Link } from 'react-router-dom'
import Bill from './Bill'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

function Checkout() {
   const cartItems = useSelector(store => store.cart.cartItems)
   const sumOfPrice = Math.ceil(
      cartItems.reduce((prev, item) => (prev += item.price * item.count), 0)
   ).toFixed(2)
   const shipping = (sumOfPrice * 0.01).toFixed(2)
   const tax = (sumOfPrice * 0.15).toFixed(2)

   return (
      <section className='bg-gray-100/50 border rounded-2xl max-h-[80vh] p-1 md:p-2 lg:p-4 justify-center md:flex gap-4 max-w-6xl mx-auto'>
         {cartItems.length ? (
            <>
               <div className='flex flex-col gap-3  grow overflow-y-auto'>
                  {cartItems.map(item => (
                     <CartItem key={item.id} item={item} />
                  ))}
               </div>
               <Bill sumOfPrice={sumOfPrice} shipping={shipping} tax={tax} />
            </>
         ) : (
            <div className='text-3xl text-center py-8'>
               Your cart is empty <br />
               <Link to='/' className='text-blue-600'>
                  Start shopping!
               </Link>
            </div>
         )}
      </section>
   )
}
export default Checkout
