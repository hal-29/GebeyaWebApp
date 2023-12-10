import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCartItem } from '../cart/cartSlice'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'

function Card({ product }) {
   const dispatch = useDispatch()
   const { cartItems } = useSelector(store => store.cart)

   const { name, images, rating, price, id } = product

   return (
      <div className='flex '>
         <div className='flex flex-col relative w-56 h-[22rem] max-w-xs overflow-hidden rounded-lg bg-white shadow-md'>
            <a href={`/product/${id}`}>
               <img
                  className='h-40 w-full rounded-t-lg object-cover'
                  src={images[0]}
                  alt={name}
               />
            </a>

            <div className='my-2 gap-2 px-5  flex flex-col grow'>
               <Link to={`/product/${id}`}>
                  <h5 className='text-xl font-semibold tracking-tight text-slate-900'>
                     {name}
                  </h5>
               </Link>
               <div className=' flex items-center'>
                  <span className='mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold'>
                     {rating}
                  </span>
                  {Array.from({ length: rating }, (_, index) => (
                     <svg
                        key={index}
                        aria-hidden='true'
                        className='h-5 w-5 text-yellow-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                     </svg>
                  ))}
               </div>
               <div className='mt-auto flex justify-between items-center'>
                  <p>
                     <span className='text-xl font-bold text-slate-900'>{`$${Number(
                        price
                     ).toFixed(2)}`}</span>
                  </p>
                  <div className='cursor-pointer text-yellow-600 px-2'>
                     <span className='fa-solid fa-bookmark text-xl'></span>
                  </div>
               </div>
               <div className=''>
                  {!cartItems.find(item => item.id === id) ? (
                     <Button
                        onClick={() => dispatch(addToCart(product))}
                        label={
                           <>
                              <span className='fa-solid fa-cart-shopping'></span>
                              <span>Add to cart</span>
                           </>
                        }
                     />
                  ) : (
                     <Button
                        onClick={() => dispatch(removeCartItem(product.id))}
                        secondary={true}
                        label={
                           <>
                              <span className='fa-solid fa-xmark'></span>
                              <span>Remove from cart</span>
                           </>
                        }
                     />
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card
