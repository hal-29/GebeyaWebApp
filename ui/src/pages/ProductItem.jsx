import { useQuery } from '@tanstack/react-query'
import { FaHeart, FaPlus } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { endpoints } from '../api/endpoints'
import api from '../api/axios'
import useCart from '../store/useCart'
import useWishlist from '../store/useWishlist'
import useAuth from '../store/useAuth'

function ProductItem() {
   const { id } = useParams()
   const user = useAuth(state => state.user)
   const { isInCart, addToCart, removeFromCart } = useCart(state => state)
   const { wishlists, addToWishlist, removeFromWishlist } = useWishlist(
      state => state
   )
   const query = useQuery({
      queryKey: ['product', id],
      queryFn: async () => {
         const res = await api.get(endpoints.getProduct(id))
         return res.data
      },
      staleTime: Infinity,
      enabled: !!id,
   })

   const onWishlisting = () => {
      if (!user) return
      if (wishlists.some(item => item.id === query.data?.id)) {
         removeFromWishlist(query.data?.id)
      } else {
         addToWishlist(query.data?.id)
      }
   }

   if (query.isLoading) return <div>Loading...</div>
   if (query.isError) return <div>Error...</div>

   return (
      <main className='flex sm:flex-row flex-col gap-6 p-2 md:p-6'>
         <div className='bg-blue-200/50 p-6 basis-2/5 shrink-0'>
            <img
               src={
                  query.data?.image ||
                  'https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1'
               }
               alt='product image'
               className='w-full h-full object-contain'
            />
         </div>
         <div className='flex flex-col gap-4 p-2 md:p-6 lg:p-8 grow'>
            <h2 className='font-semibold text-4xl text-gray-800/80'>
               {query.data?.name}
            </h2>
            <div className='flex flex-col gap-2'>
               <p className='flex gap-4'>
                  <span className='font-semibold text-gray-800/70 underline'>
                     Category
                  </span>
                  <span className='text-gray-800 italic'>
                     {query.data?.category}
                  </span>
               </p>
               <div className='flex gap-4'>
                  <span className='font-semibold text-gray-800/70 underline'>
                     Tags
                  </span>
                  <div className='flex flex-wrap items-center gap-2'>
                     {query.data?.tags.map(tag => (
                        <button
                           key={tag}
                           className='px-2 border rounded-full text-xs'
                        >
                           #{tag}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className='flex flex-col'>
               <h3 className='font-semibold text-2xl text-gray-800/80'>
                  Description
               </h3>
               <p className='text-gray-800/80'>{query.data?.description}</p>
            </div>
            <div className='flex justify-between items-center gap-4 mt-auto'>
               <div className='flex items-baseline gap-2'>
                  <span className='font-semibold text-2xl text-red-800'>
                     Rs.{Number(query.data?.price).toFixed(2)}
                  </span>
                  <span className='text-gray-800/80'>
                     <strike>
                        Rs.{Number(query.data?.price * 1.15).toFixed(2)}
                     </strike>
                  </span>
               </div>
               <div className='flex gap-3'>
                  {!!user && (
                     <button
                        className={`  bg-gray-400 w-10 h-10 transition-all  disabled:cursor-not-allowed ${
                           wishlists.some(item => item.id === query.data?.id)
                              ? 'bg-red-800'
                              : 'bg-gray-400'
                        }`}
                        onClick={onWishlisting}
                     >
                        <FaHeart className='m-3 text-gray-50 text-lg' />
                     </button>
                  )}
                  <button
                     className={` bg-gray-400 w-10 h-10 transition-all  ${
                        isInCart(query.data?.id) ? 'bg-red-800' : 'bg-gray-400'
                     }`}
                     onClick={() =>
                        isInCart(query.data?.id)
                           ? removeFromCart(query.data?.id)
                           : addToCart(query.data)
                     }
                  >
                     <FaPlus className='m-3 text-gray-50 text-lg' />
                  </button>
               </div>
            </div>
         </div>
      </main>
   )
}
export default ProductItem
