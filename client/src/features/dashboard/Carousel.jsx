import { useState } from 'react'
import CarouselSlide from './CarouselSlide'

function Carousel() {
   const [activeCarousel, setActiveCarousel] = useState(1)
   return (
      <section className='h-72 px-2 flex justify-center py-4 relative'>
         <div className='carousel w-full h-full max-w-6xl'>
            {activeCarousel === 1 && (
               <CarouselSlide img='https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148434188.jpg?w=826&t=st=1701633315~exp=1701633915~hmac=d4f68d58449c8ea01024b24630bc368ddcca321765a6e566e2d985c7dfda9a57' />
            )}
            {activeCarousel === 2 && (
               <CarouselSlide img='https://img.freepik.com/free-vector/3d-mobile-phone-screen-light-glow-background_107791-20300.jpg?w=996&t=st=1703099724~exp=1703100324~hmac=df16b262e307b4684c4b428a0c55278c8666d1c01a2852b60235b70b4099911d' />
            )}
            {activeCarousel === 3 && (
               <CarouselSlide img='https://img.freepik.com/free-vector/vector-smartphone-with-blank-white-screen_107791-1328.jpg?w=826&t=st=1703100419~exp=1703101019~hmac=6c417cde1d59eed6c97fb29fc0fdbfa7db01795e48d377724a9e5b6dc860ed81' />
            )}
         </div>
         <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-1'>
            <span
               className='btn btn-circle'
               onClick={() => setActiveCarousel(pr => (pr == 1 ? 3 : --pr))}
            >
               ❮
            </span>
            <span
               className='btn btn-circle'
               onClick={() => setActiveCarousel(pr => (pr == 3 ? 1 : ++pr))}
            >
               ❯
            </span>
         </div>
      </section>
   )
}

export default Carousel
