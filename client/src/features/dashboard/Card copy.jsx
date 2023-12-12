/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCartItem } from '../cart/cartSlice'

function Card({ product }) {
   const dispatch = useDispatch()
   const { cartItems } = useSelector(store => store.cart)

   const { name, images, rating, price, id } = product
   return (
      <div className='flex flex-col bg-gray-100/70 border shadow-md rounded-lg max-w-sm max-h-[20rem]'>
         <Link
            to={`/product/${id}`}
            className='basis-2/3 h-32 overflow-hidden '
         >
            <img
               className='rounded-t-lg p-3 bg-trans  w-full h-full object-cover '
               src={images[0]}
               alt={name}
            />
         </Link>
         <div className='shrink-0 px-5 pb-5'>
            <h3 className='text-gray-900 font-semibold  tracking-tight '>
               {name}
            </h3>
            <div className='flex items-center mt-2.5 mb-5'>
               <svg
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
               </svg>
               <svg
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
               </svg>
               <svg
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
               </svg>
               <svg
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
               </svg>
               <svg
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
               </svg>
               <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                  5.0
               </span>
            </div>
            <div className='flex items-center justify-between'>
               <span className=' font-bold text-gray-900 '>{`$${Number(
                  price
               ).toFixed(2)}`}</span>
               {!cartItems.find(item => item.id === id) ? (
                  <span
                     onClick={() => dispatch(addToCart(product))}
                     className='cursor-pointer text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded px-2 py-1 text-center '
                  >
                     Add to cart
                  </span>
               ) : (
                  <span
                     onClick={() => dispatch(removeCartItem(id))}
                     className='cursor-pointer text-white text-xs bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded px-2 py-1 text-center '
                  >
                     Remove item
                  </span>
               )}
            </div>
         </div>
      </div>
   )
}
export default Card