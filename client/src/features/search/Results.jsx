/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom'
import Pagination from '../../ui/Pagination'
import calculateNextPage from '../../utils/calculateNextPage'
import Card from '../dashboard/Card'
import { useEffect } from 'react'

function Results({ query, count, results }) {
   const [searchQuery, setSearchQuery] = useSearchParams()
   const { prevPageQuery, nextPageQuery } = calculateNextPage(query)

   useEffect(() => {
      document.title = `Search | ${searchQuery.get('q')}`
   }, [searchQuery])

   return (
      <div className='flex flex-col gap-2 items-center '>
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
      </div>
   )
}
export default Results
