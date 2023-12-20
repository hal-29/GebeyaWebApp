function CarouselSlide({ id, img }) {
   return (
      <div
         id={id}
         className='carousel-item relative w-full rounded-xl overflow-hidden after:content-[""] after:block after:w-full after:h-full after:absolute after:left-0 after:top-0  '
      >
         <img src={img} className='w-full h-full object-cover' />
      </div>
   )
}
export default CarouselSlide
