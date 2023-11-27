function CarouselSlide({ id, img }) {
   return (
      <div
         id={id}
         className='carousel-item relative w-full rounded-xl overflow-hidden after:content-[""] after:block after:w-full after:h-full after:absolute after:left-0 after:top-0  after:bg-gradient-to-b after:from-primary/30 after:to-primary/10'
      >
         <img src={img} className='w-full h-full object-cover' />
         <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50'>
            <span className='btn btn-circle'>❮</span>
            <span className='btn btn-circle'>❯</span>
         </div>
      </div>
   )
}
export default CarouselSlide
