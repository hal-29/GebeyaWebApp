import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'
import Card from '../ui/Card'

function SearchResults() {
   const [searchParams, setSearchParams] = useSearchParams()

   const query = useQuery({
      queryKey: ['search', searchParams.toString()],
      queryFn: async () => {
         const { data } = await api.get(endpoints.getAllProducts(searchParams))
         return data
      },
      staleTime: Infinity,
   })

   if (query.isLoading) return <div>Loading...</div>
   return (
      <main>
         <section className='flex flex-col justify-center py-2 min-h-80'>
            <div className='flex justify-between items-center px-2 py-4'>
               <h2 className='py-6 font-semibold text-2xl text-gray-900/90 capitalize'>
                  Showing results for &quot;
                  {searchParams.get('category') || searchParams.get('q')}&quot;
               </h2>
               <span
                  onClick={() => setSearchParams({})}
                  className='px-4 py-1 border border-red-800 text-red-800 cursor-pointer'
               >
                  Clear
               </span>
            </div>
            <div className='gap-4 grid grid-cols-6'>
               {query.data?.data.map(product => (
                  <Card key={product.id} product={product} />
               ))}
               {query.data?.data.length === 0 && (
                  <div className='col-span-full text-center text-gray-900/70'>
                     No products found
                  </div>
               )}
            </div>
         </section>
      </main>
   )
}
export default SearchResults
