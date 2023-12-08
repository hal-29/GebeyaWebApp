function Rating({ size = 'md' }) {
   return (
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
   )
}
export default Rating
