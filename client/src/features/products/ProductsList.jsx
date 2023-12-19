import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Pagination from '../../ui/Pagination'
import { fetchProducts } from './productSlice'
import Loading from '../../ui/Loading'
import calculateNextPage from '../../utils/calculateNextPage'
import Card from '../../ui/Card'

function ProductsList() {
   const { search } = useLocation()
   const [searchParams, setSearchParams] = useSearchParams()

   const { products, loading, resultsCount } = useSelector(
      store => store.product
   )
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts(search))
   }, [search, dispatch, products])

   const { prevPageQuery, nextPageQuery } = calculateNextPage(search)

   if (loading) return <Loading />
   return (
      <section className='flex flex-col justify-center items-center gap-6'>
         <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 items-stretch gap-3'>
            {products[search] ? (
               products[search].map(prod => (
                  <Card key={prod.id} product={prod} />
               ))
            ) : (
               <p className='text-2xl text-center font-semibold col-span-full '>
                  There are no results with this category.
               </p>
            )}
         </div>
         <Pagination
            total={resultsCount[search]}
            curPage={searchParams.get('page') || 1}
            onNext={() => setSearchParams(nextPageQuery)}
            onPrev={() => setSearchParams(prevPageQuery)}
         />
      </section>
   )
}
export default ProductsList
