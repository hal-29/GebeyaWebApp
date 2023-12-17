/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { removeCartItem, setCartCount } from './cartSlice'

function CartItem({ item }) {
   const dispatch = useDispatch()

   return (
      <div className='flex  gap-1 md:gap-3  p-1 md:p-2 border-b relative h-44'>
         <div className='basis-1/4 shrink-0 rounded-lg overflow-hidden'>
            <img
               className='h-full w-full object-cover'
               src={item.images[0]}
               alt='cart item'
            />
         </div>
         <div className='flex flex-col justify-between items-strech grow'>
            <div className='flex flex-col grow'>
               <h3 className='text-lg font-semibold'>{item.name}</h3>
               <p className='text-sm text-gray-700/80'>{item.brand}</p>
            </div>
            <div className='flex justify-end gap-4'>
               <input
                  type='number'
                  value={item.count}
                  min={1}
                  max={item.stock}
                  onChange={e => {
                     dispatch(
                        setCartCount({ id: item.id, count: e.target.value })
                     )
                  }}
                  className='join-item input input-bordered max-w-xs w-16 py-0 px-2 text-xl bg-gray-100'
               />
               <div className='text-2xl font-bold flex items-end'>
                  ${(item.price * item.count).toFixed(2)}
               </div>
            </div>
         </div>
         <span
            onClick={() => dispatch(removeCartItem(item.id))}
            className='absolute z-10 right-2 top-2 px-2 bg-gray-300 rounded-full cursor-pointer'
         >
            <span className='text-lg fa-solid fa-xmark'></span>
         </span>
      </div>
   )
}
export default CartItem
