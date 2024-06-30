import { useQuery } from '@tanstack/react-query'
import { PiListMagnifyingGlass } from 'react-icons/pi'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'
import CategoryItems from '../components/CategoryItems'
import { useSearchParams } from 'react-router-dom'
import SearchResults from '../components/SearchResults'

function Products() {
   const [searchParams, setSearchParams] = useSearchParams()

   const categories = useQuery({
      queryKey: ['categories'],
      queryFn: async () => {
         const { data } = await api.get(endpoints.getCategories('?limit=12'))
         return data
      },
      staleTime: Infinity,
   })

   if (searchParams.get('category')) return <SearchResults />
   return (
      <main className=''>
         <section className='inline-grid grid-cols-[minmax(24rem,1fr)_3fr] grid-rows-[min-content,1fr,minmax(min-content,10rem)]'>
            <div className='col-span-full flex justify-between items-center py-4 px-2'>
               <h1 className='font-semibold text-2xl text-gray-800/90'>
                  Electronics
               </h1>
            </div>
            <ul className=''>
               <div className='flex justify-between items-center text-lg  bg-gray-950 text-gray-50 px-3 py-2'>
                  <h3 className=''>Browse Catagories</h3>
                  <span className='text-3xl'>
                     <PiListMagnifyingGlass />
                  </span>
               </div>
               {categories.data?.data.map(category => (
                  <li
                     key={Math.random()}
                     onClick={() =>
                        setSearchParams({ category: category.name })
                     }
                     className='border px-4 py-3 text-gray-900/80 cursor-pointer'
                  >
                     {category.name}
                  </li>
               ))}
            </ul>
            <section className='p-2'>
               <ul className='flex gap-4 items-center px-2 pb-2'>
                  <li className=''>Catagories</li>
                  <li className=''>Collection</li>
                  <li className=''>Pages</li>
               </ul>
               <div className=''>
                  <img
                     src='https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                     alt=''
                  />
               </div>
            </section>
         </section>

         {categories.data?.data.slice(0, 5).map(category => (
            <CategoryItems key={category.name} category={category} />
         ))}
      </main>
   )
}
export default Products
