import CarouselSlide from './CarouselSlide'

function Carousel() {
   return (
      <section className='h-72 px-2 flex justify-center py-4'>
         <div className='carousel w-full h-full max-w-6xl'>
            <CarouselSlide img='https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148434188.jpg?w=826&t=st=1701633315~exp=1701633915~hmac=d4f68d58449c8ea01024b24630bc368ddcca321765a6e566e2d985c7dfda9a57' />
         </div>
      </section>
   )
}

export default Carousel
