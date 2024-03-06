import Container from '../ui/Container'
import { PiListMagnifyingGlass, PiMagnifyingGlassBold } from 'react-icons/pi'
import { RxRocket } from 'react-icons/rx'
import { MdSupportAgent } from 'react-icons/md'
import { GiStarsStack } from 'react-icons/gi'
import { IoGiftOutline } from 'react-icons/io5'
import { TiShoppingCart } from 'react-icons/ti'
import { TbHeart } from 'react-icons/tb'

function Hero() {
   return (
      <Container className='inline-grid grid-cols-[minmax(24rem,1fr)_3fr] grid-rows-[min-content,1fr,minmax(min-content,10rem)] pb-10'>
         <div className='col-span-full flex justify-between items-center py-4 px-2'>
            <h1 className='font-semibold text-2xl text-gray-800/90'>
               Electronics
            </h1>
            <div className='flex grow max-w-screen-md'>
               <input
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Search our catalog'
                  className='border px-4 py-2 focus:outline-none grow'
               />
               <button className='bg-red-800 text-xl px-6 text-gray-100'>
                  <PiMagnifyingGlassBold />
               </button>
            </div>
            <div className='flex gap-2 text-3xl'>
               <span>
                  <TbHeart />
               </span>
               <span>
                  <TiShoppingCart />
               </span>
            </div>
         </div>
         <ul className=''>
            <div className='flex justify-between items-center text-lg  bg-gray-950 text-gray-50 px-3 py-2'>
               <h3 className=''>Browse Catagories</h3>
               <span className='text-3xl'>
                  <PiListMagnifyingGlass />
               </span>
            </div>
            <li className='border px-4 py-3 text-gray-900/80'>Computer</li>
            <li className='border px-4 py-3 text-gray-900/80'>Smartphone</li>
            <li className='border px-4 py-3 text-gray-900/80'>Camera</li>
            <li className='border px-4 py-3 text-gray-900/80'>Smartwatch</li>
            <li className='border px-4 py-3 text-gray-900/80'>Smart TV</li>
            <li className='border px-4 py-3 text-gray-900/80'>Speaker</li>
            <li className='border px-4 py-3 text-gray-900/80'>Airpod</li>
            <li className='border px-4 py-3 text-gray-900/80'>Macbook</li>
            <li className='border px-4 py-3 text-gray-900/80'>Pendrive</li>
            <li className='border px-4 py-3 text-gray-900/80'>Tablet</li>
            <li className='border px-4 py-3 text-gray-900/80'>Desktop</li>
            <li className='border px-4 py-3 text-gray-900/80'>Mouse</li>
         </ul>
         <section className='p-2'>
            <ul className='flex gap-4 items-center px-2 pb-2'>
               <li className=''>Catagories</li>
               <li className=''>Collection</li>
               <li className=''>Pages</li>
            </ul>
            <div className=''>
               <img
                  src='https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
               />
            </div>
         </section>
         <section className='col-span-full flex justify-evenly'>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 text-red-800  row-end-3 text-5xl'>
                  <RxRocket />
               </span>
               <div>
                  <h2 className=' font-semibold text-gray-800/90 pt-2'>
                     Free adn fast delivery
                  </h2>
                  <p className='text-sm text-gray-700/70 pb-2'>
                     fast order delivery at your door step
                  </p>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 text-red-800  row-end-3 text-5xl'>
                  <IoGiftOutline />
               </span>
               <div>
                  <h2 className=' font-semibold text-gray-800/90 pt-2'>
                     Gift card
                  </h2>
                  <p className='text-sm text-gray-700/70 pb-2'>
                     get gift card on every purchase
                  </p>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 text-red-800  row-end-3 text-5xl'>
                  <GiStarsStack />
               </span>
               <div>
                  <h2 className=' font-semibold text-gray-800/90 pt-2'>
                     Best quality products
                  </h2>
                  <p className='text-sm text-gray-700/70 pb-2'>
                     we provide best quality products
                  </p>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <span className='row-span-full row-start-1 text-red-800  row-end-3 text-5xl'>
                  <MdSupportAgent />
               </span>
               <div>
                  <h2 className=' font-semibold text-gray-800/90 pt-2'>
                     24/7 customer support
                  </h2>
                  <p className='text-sm text-gray-700/70 pb-2'>
                     all time support for our customer
                  </p>
               </div>
            </div>
         </section>
      </Container>
   )
}
export default Hero
