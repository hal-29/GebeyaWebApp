import Card from '../ui/Card'
import useAuth from '../store/useAuth'
import useWishlist from '../store/useWishlist'
import { useEffect } from 'react'

function Wishlist() {
   const user = useAuth(state => state.user)
   const { wishlists, fetchWishlists, removeAllWishlist } = useWishlist(
      state => state
   )

   useEffect(() => {
      if (!user) return
      fetchWishlists()
   }, [user, fetchWishlists])

   if (!user)
      return (
         <main className='flex justify-center items-center py-6 min-h-80'>
            <h1 className='text-2xl text-center'>
               Please login to view your wishlists
            </h1>
         </main>
      )

   return (
      <main className='py-6'>
         <div className='flex justify-between'>
            <h1 className='text-2xl'>Wishlists</h1>
            <button
               onClick={() => removeAllWishlist()}
               className='px-3 border border-red-800 text-red-800'
            >
               Remove all
            </button>
         </div>
         <section className='gap-3 grid grid-cols-5 py-6'>
            {wishlists.map(product => (
               <Card key={product.id} product={product} />
            ))}
         </section>
         {wishlists.length === 0 && (
            <h1 className='text-2xl text-center text-gray-500'>
               There are no products in your wishlist
            </h1>
         )}
      </main>
   )
}
export default Wishlist
