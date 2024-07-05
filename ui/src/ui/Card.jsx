import { PropTypes } from 'prop-types'
import { FaHeart, FaPlus } from 'react-icons/fa'
import useCart from '../store/useCart'
import useWishlist from '../store/useWishlist'
import useAuth from '../store/useAuth'
import { useNavigate } from 'react-router-dom'

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
   const navigate = useNavigate()
   const user = useAuth(state => state.user)
   const { isInCart, addToCart, removeFromCart } = useCart(state => state)
   const { wishlists, addToWishlist, removeFromWishlist } = useWishlist(
      state => state
   )

   const onWishlisting = () => {
      if (!user) return
      if (wishlists.some(item => item.id === product.id)) {
         removeFromWishlist(product.id)
      } else {
         addToWishlist(product.id)
      }
   }

   return (
      <div className='relative flex flex-col gap-2 shadow-sm min-w-52 h-full overflow-clip group'>
         <button
            disabled={!user}
            className={`group-hover:top-0 -top-10 left-0 absolute bg-gray-400 w-10 h-10 transition-all cursor-pointer disabled:cursor-not-allowed ${
               wishlists.some(item => item.id === product.id)
                  ? 'bg-red-800'
                  : 'bg-gray-400'
            }`}
            onClick={onWishlisting}
         >
            <FaHeart className='m-3 text-gray-50 text-lg' />
         </button>
         <button
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
         </button>
         <div
            className='bg-gray-200/80 p-8 cursor-pointer'
            onClick={() => navigate(`/products/${product.id}`)}
         >
            <img
               src={
                  product.image ||
                  'https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1'
               }
               alt={product.name}
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
