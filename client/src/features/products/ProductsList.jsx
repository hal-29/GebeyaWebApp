import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Pagination from '../../ui/Pagination'
import Card from '../dashboard/Card'
import { fetchProducts } from './productSlice'

function ProductsList() {
   const { search } = useLocation()
   const [searchParams] = useSearchParams()
   const { products, loading } = useSelector(store => store.product)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts(search))
   }, [search, dispatch])

   if (loading) return <h2 className='text-4xl'>Loading...</h2>
   return (
      <section className='flex flex-col justify-center items-center gap-6'>
         <h2 className='text-2xl '>
            Showing results for : &nbsp;
            <span className='text-3xl font-bold'>{`"${searchParams.get(
               'category'
            )}"`}</span>
         </h2>
         <div className='inline-flex flex-wrap gap-4 justify-center '>
            {products[search]}
         </div>
         <Pagination />
      </section>
   )
}
export default ProductsList
