function Rating({ size = 'md' }) {
   return (
      <div className='flex justify-between'>
         <div className={`rating rating-${size}`}>
            <input
               type='radio'
               name='rating-5'
               className='mask mask-star-2 bg-orange-400'
            />
            <input
               type='radio'
               name='rating-5'
               className='mask mask-star-2 bg-orange-400'
            />
            <input
               type='radio'
               name='rating-5'
               className='mask mask-star-2 bg-orange-400'
            />
            <input
               type='radio'
               name='rating-5'
               className='mask mask-star-2 bg-orange-400'
            />
            <input
               type='radio'
               name='rating-5'
               className='mask mask-star-2 bg-orange-400'
            />
         </div>
         <div className='text-lg text-orange-400'>4.7</div>
      </div>
   )
}
export default Rating
