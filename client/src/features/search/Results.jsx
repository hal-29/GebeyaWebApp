/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom'
import Pagination from '../../ui/Pagination'
import calculateNextPage from '../../utils/calculateNextPage'
import { useEffect } from 'react'
import Card from '../../ui/Card'

function Results({ query, count, results }) {
   const [searchQuery, setSearchQuery] = useSearchParams()
   const { prevPageQuery, nextPageQuery } = calculateNextPage(query)

   useEffect(() => {
      document.title = `Search | ${searchQuery.get('q')}`
   }, [searchQuery])

   return (
      <div className='flex flex-col gap-2 items-center '>
         {results.length ? (
            <>
               <div className='text-2xl p-4'>
                  Showing results for: <em>{searchQuery.get('q')}</em>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 flex-wrap justify-center'>
                  {results.map(result => (
                     <Card key={result.id} product={result} />
                  ))}
               </div>
               <Pagination
                  total={count}
                  curPage={searchQuery.get('page') || 1}
                  onNext={() => setSearchQuery(nextPageQuery)}
                  onPrev={() => setSearchQuery(prevPageQuery)}
                  perPage={10}
               />
            </>
         ) : (
            <p className='text-2xl text-center font-semibold col-span-full '>
               There are no results with this category.
            </p>
         )}
      </div>
   )
}
export default Results
