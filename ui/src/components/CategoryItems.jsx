import { useQuery } from '@tanstack/react-query'
import { PropTypes } from 'prop-types'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'
import Card from '../ui/Card'

CategoryItems.propTypes = {
   category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
   }),
}

function CategoryItems({ category }) {
   const query = useQuery({
      queryKey: ['category', category.name],
      queryFn: async () => {
         const res = await api.get(
            endpoints.getAllProducts('?category=' + category.name)
         )
         return res?.data
      },
      staleTime: Infinity,
   })

   if (query.isLoading) return <div>Loading...</div>
   return (
      <section
         key={category.name}
         className='flex flex-col justify-center py-2 min-h-80'
      >
         <h1 className='py-6 font-semibold text-2xl text-gray-900/90 capitalize'>
            {category.name}
         </h1>
         <div className='gap-4 grid grid-cols-6'>
            {query.data?.map(product => (
               <Card key={product.id} product={product} />
            ))}
         </div>
      </section>
   )
}
export default CategoryItems
