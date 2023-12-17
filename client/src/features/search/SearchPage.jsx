import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Filter from './Filter'
import Results from './Results'
import Loading from '../../ui/Loading'
import { fetchSearchResults } from './searchSlice'

function SearchPage() {
   const { search } = useLocation()
   const { loading, count, results } = useSelector(state => state.search)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchSearchResults(search))
   }, [search, dispatch])

   if (loading) return <Loading />
   return (
      <div>
         {/* <Filter /> */}
         <Results query={search} results={results} count={count} />
      </div>
   )
}
export default SearchPage
