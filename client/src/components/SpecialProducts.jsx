import { useQuery } from '@tanstack/react-query'
import Card from '../ui/Card'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'

function SpecialProducts() {
   const query = useQuery({
      queryKey: ['special', 'products'],
      queryFn: async () => {
         const res = await api.get(endpoints.getSpecials())
         return res?.data
      },
   })

   if (query.isLoading) return <div>Loading...</div>

   return (
      <section className='flex flex-col justify-center py-2 min-h-80'>
         <h1 className='py-6 font-semibold text-2xl text-center text-gray-900/90 capitalize'>
            Special Products
         </h1>
         <div className='flex gap-4 p-3 h-96 whitespace-nowrap overflow-x-auto special-products'>
            {query.data?.map(product => (
               <Card key={product.id} product={product} />
            ))}
         </div>
      </section>
   )
}
export default SpecialProducts
