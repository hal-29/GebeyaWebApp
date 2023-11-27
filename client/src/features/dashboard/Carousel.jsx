import CarouselSlide from './CarouselSlide'

function Carousel() {
   return (
      <section className='h-80'>
         <div className='carousel w-full max-h-full pt-4 pb-12 '>
            <CarouselSlide img='./src/asset/gadget.jpg' />
         </div>
      </section>
   )
}

export default Carousel
