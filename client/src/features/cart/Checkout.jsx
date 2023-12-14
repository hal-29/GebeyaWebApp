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
      <section className='bg-gray-100/50 border rounded-2xl max-h-[80vh] p-4 flex gap-4 max-w-6xl mx-auto'>
         <div className='flex flex-col gap-3 px-2  grow overflow-y-auto'>
            {cartItems.map(item => (
               <CartItem key={item.id} item={item} />
            ))}
         </div>
         <Bill sumOfPrice={sumOfPrice} shipping={shipping} tax={tax} />
      </section>
   )
}
export default Checkout
