import queryParser from './queryParser'

function calculateNextPage(search) {
   const pageQuery = queryParser(search)
   const nextPageQuery = {
      ...pageQuery,
      page: pageQuery.page ? +pageQuery.page + 1 : 2,
   }
   const prevPageQuery = {
      ...pageQuery,
      page: pageQuery.page && pageQuery.page > 1 ? pageQuery.page - 1 : 1,
   }

   return { nextPageQuery, prevPageQuery }
}
export default calculateNextPage
