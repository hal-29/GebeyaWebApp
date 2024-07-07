import { useQuery } from '@tanstack/react-query'
import Card from '../ui/Card'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'

function TrendingCollection() {
   const query = useQuery({
      queryKey: ['trending', 'products'],
      queryFn: async () => {
         const res = await api.get(endpoints.getTrendings())
         return res?.data
      },
   })

   if (query.isLoading) return <div>Loading...</div>
   return (
      <section className='flex flex-col justify-center py-2 min-h-80'>
         <h1 className='py-6 font-semibold text-2xl text-center text-gray-900/90 capitalize'>
            Trending Collection
         </h1>
         <div className='flex sm:flex-row flex-col justify-center gap-2 sm:gap-4 pt-4 pb-8'>
            <div className='bg-red-800/90 hover:bg-gray-800/90 px-8 py-3 text-gray-100 uppercase transition cursor-pointer'>
               new products
            </div>
            <div className='bg-red-800/90 hover:bg-gray-800/90 px-8 py-3 text-gray-100 uppercase transition cursor-pointer'>
               featured products
            </div>
            <div className='bg-red-800/90 hover:bg-gray-800/90 px-8 py-3 text-gray-100 uppercase transition cursor-pointer'>
               best seller
            </div>
         </div>
         <div className='gap-4 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] p-3'>
            {query.data?.map(product => (
               <Card key={product.id} product={product} />
            ))}
         </div>
      </section>
   )
}
export default TrendingCollection
