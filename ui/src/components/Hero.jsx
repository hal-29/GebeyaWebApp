import { Link } from 'react-router-dom'
import { RxRocket } from 'react-icons/rx'
import { MdSupportAgent } from 'react-icons/md'
import { GiStarsStack } from 'react-icons/gi'
import { IoGiftOutline } from 'react-icons/io5'

function Hero() {
   return (
      <>
         <section className='flex md:flex-row flex-col gap-4 md:gap-1 bg-gray-200 mb-4 p-2 md:p-4 lg:p-8 rounded-md min-h-96'>
            <div className='flex flex-col justify-center items-start gap-4'>
               <h1 className='text-4xl text-gray-900/90 md:text-6xl'>
                  Grub your favorite gadgets here
               </h1>
               <h4 className='text-gray-900/70 md:text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  doloremque, quidem, voluptas, quibusdam nemo laborum
                  exercitationem quod doloribus quae voluptates
               </h4>
               <Link
                  to='/products'
                  className='bg-red-800/90 px-4 py-2 text-gray-50'
               >
                  Shop Now
               </Link>
            </div>
            <div className='basis-1/2 shrink-0'>
               <img
                  className='max-h-96 object-contain'
                  src='https://cdn0.it4profit.com/s3size/rt:fill/w:1024/h:1024/g:no/el:1/f:webp/plain/s3://cms/product/0a/1e/0a1e4b0d06b4f5a846a8e717e19c0eab/221201150009625631.webp'
                  alt='gadget image'
               />
            </div>
         </section>
         <section className='flex flex-wrap justify-between gap-2 py-10'>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 row-end-3 text-5xl text-red-800'>
                  <RxRocket />
               </span>
               <div>
                  <h2 className='pt-2 font-semibold text-gray-800/90'>
                     Free adn fast delivery
                  </h2>
                  <p className='pb-2 text-gray-700/70 text-sm'>
                     fast order delivery at your door step
                  </p>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 row-end-3 text-5xl text-red-800'>
                  <IoGiftOutline />
               </span>
               <div>
                  <h2 className='pt-2 font-semibold text-gray-800/90'>
                     Gift card
                  </h2>
                  <p className='pb-2 text-gray-700/70 text-sm'>
                     get gift card on every purchase
                  </p>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 row-end-3 text-5xl text-red-800'>
                  <GiStarsStack />
               </span>
               <div>
                  <h2 className='pt-2 font-semibold text-gray-800/90'>
                     Best quality products
                  </h2>
                  <p className='pb-2 text-gray-700/70 text-sm'>
                     we provide best quality products
                  </p>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 row-end-3 text-5xl text-red-800'>
                  <MdSupportAgent />
               </span>
               <div>
                  <h2 className='pt-2 font-semibold text-gray-800/90'>
                     24/7 customer support
                  </h2>
                  <p className='pb-2 text-gray-700/70 text-sm'>
                     all time support for our customer
                  </p>
               </div>
            </div>
         </section>
      </>
   )
}
export default Hero
