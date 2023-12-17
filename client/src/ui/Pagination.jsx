function Pagination({ curPage = 1, perPage = 20, total, onPrev, onNext }) {
   const pages = Math.ceil(total / perPage)
   return (
      <div className='join'>
         {curPage > 1 && (
            <button onClick={onPrev} className='join-item btn'>
               «
            </button>
         )}
         {pages > 1 && (
            <button className='join-item btn'>Page {curPage}</button>
         )}
         {curPage < pages && (
            <button onClick={onNext} className='join-item btn'>
               »
            </button>
         )}
      </div>
   )
}
export default Pagination
