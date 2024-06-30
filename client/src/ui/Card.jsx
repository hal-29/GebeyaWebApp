import { PropTypes } from 'prop-types'
import { FaHeart, FaPlus } from 'react-icons/fa'
import useCart from '../store/useCart'

Card.propTypes = {
   product: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
   }),
}

function Card({ product }) {
   const { isInCart, addToCart, removeFromCart } = useCart(state => state)

   return (
      <div className='relative flex flex-col gap-2 shadow-sm min-w-52 h-full overflow-clip group'>
         <span
            className={`group-hover:top-0 -top-10 left-0 absolute bg-gray-400 w-10 h-10 transition-all cursor-pointer`}
         >
            <FaHeart className='m-3 text-gray-50 text-lg' />
         </span>
         <span
            className={`group-hover:top-0 -top-10 right-0 absolute bg-gray-400 w-10 h-10 transition-all cursor-pointer ${
               isInCart(product.id) ? 'bg-red-800' : 'bg-gray-400'
            }`}
            onClick={() =>
               isInCart(product.id)
                  ? removeFromCart(product.id)
                  : addToCart(product)
            }
         >
            <FaPlus className='m-3 text-gray-50 text-lg' />
         </span>
         <div className='bg-gray-200/80 p-8'>
            <img
               src='https://cdn0.it4profit.com/s3size/rt:fill/w:1024/h:1024/g:no/el:1/f:webp/plain/s3://cms/product/0a/1e/0a1e4b0d06b4f5a846a8e717e19c0eab/221201150009625631.webp'
               alt='product image'
               className='w-full h-full object-contain'
            />
         </div>
         <div className='text-center'>
            <h2 className='font-semibold text-gray-800/90 text-xl truncate whitespace-nowrap'>
               {product.name}
            </h2>
         </div>
         <div className='flex flex-col justify-center items-center pb-4'>
            <span className='text-gray-600/90'>{product.category}</span>
            <span>
               <strong>Rs.{Number(product.price).toFixed(2)} </strong>
               <strike className='text-gray-500'>
                  Rs.{Number(product.price * 1.15).toFixed(2)}
               </strike>
            </span>
         </div>
      </div>
   )
}
export default Card
