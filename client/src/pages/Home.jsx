import Container from '../ui/Container'
import Wrapper from '../ui/Wrapper'
import { RxRocket } from 'react-icons/rx'
import { MdSupportAgent, MdPhotoCamera } from 'react-icons/md'
import { GiStarsStack } from 'react-icons/gi'
import { IoGiftOutline } from 'react-icons/io5'
import { PiWatchFill } from 'react-icons/pi'
import { ImHeadphones } from 'react-icons/im'
import { BsLaptop, BsHeadsetVr } from 'react-icons/bs'
import { TbDeviceAirpods } from 'react-icons/tb'
import { SlScreenSmartphone } from 'react-icons/sl'

function Home() {
   return (
      <Wrapper>
         <Container className='inline-grid grid-cols-[minmax(24rem,1fr)_3fr] grid-rows-[min-content,1fr,minmax(min-content,10rem)] pb-10'>
            <div className='col-span-full flex justify-between items-center py-4 px-2'>
               <h1 className='font-semibold text-2xl text-gray-800/90'>
                  Electronics
               </h1>
               <div className=''>
                  <input type='search' name='search' id='search' />
               </div>
               <div className=''>
                  <span>😋 </span>
                  <span>cart</span>
               </div>
            </div>
            <ul className=''>
               <div className='flex justify-between items-center text-lg  bg-gray-950 text-gray-50 px-3 py-2'>
                  <h3 className=''>Browse Catagories</h3>
                  <span>🔍</span>
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
         <main className='py-2'>
            <section className='flex justify-stretch items-center gap-3'>
               <div className='bg-yellow-100/70 flex basis-1/3  max-h-60 overflow-hidden p-4 rounded-md shadow-sm'>
                  <div className='basis-1/2 flex flex-col justify-center px-3'>
                     <h3 className='font-semibold text-lg capitalize text-gray-800/90'>
                        portable smart camera
                     </h3>
                     <h5 className='font-semibold text-gray-800/90'>
                        Sale 20% off
                     </h5>
                     <p className='font-sm'>shop now</p>
                  </div>
                  <div className='basis-1/2 flex justify-center'>
                     <img
                        src='https://cdn0.it4profit.com/s3size/rt:fill/w:1024/h:1024/g:no/el:1/f:webp/plain/s3://cms/product/7a/81/7a81963509b9849254fbc72366957909/230802160010903379.webp?width=320'
                        alt='product image'
                     />
                  </div>
               </div>
               <div className='bg-sky-100/70 flex basis-1/3  max-h-60 overflow-hidden p-4 rounded-md shadow-sm'>
                  <div className='basis-1/2 flex flex-col justify-center px-3'>
                     <h3 className='font-semibold text-lg capitalize text-gray-800/90'>
                        portable smart camera
                     </h3>
                     <h5 className='font-semibold text-gray-800/90'>
                        Sale 20% off
                     </h5>
                     <p className='font-sm'>shop now</p>
                  </div>
                  <div className='basis-1/2 flex justify-center'>
                     <img
                        src='https://hammeronline.in/cdn/shop/files/Hammerglidebluetoothcallingsmartwatch_1.webp?v=1694851875&width=540'
                        alt='product image'
                     />
                  </div>
               </div>
               <div className='bg-rose-100/70 flex basis-1/3  max-h-60 overflow-hidden p-4 rounded-md shadow-sm'>
                  <div className='basis-1/2 flex flex-col justify-center px-3'>
                     <h3 className='font-semibold text-lg capitalize text-gray-800/90'>
                        portable smart camera
                     </h3>
                     <h5 className='font-semibold text-gray-800/90'>
                        Sale 20% off
                     </h5>
                     <p className='font-sm'>shop now</p>
                  </div>
                  <div className='basis-1/2 flex justify-center'>
                     <img
                        src='https://www.ormsdirect.co.za/cdn/shop/products/rode-nth-100-professional-over-ear-headphones-front.webp?v=1678346474&width=540'
                        alt='product image'
                     />
                  </div>
               </div>
            </section>
            <section className='py-2 flex flex-col min-h-80 justify-center'>
               <h1 className='text-2xl font-semibold capitalize text-center py-6 text-gray-900/90'>
                  top catagories
               </h1>
               <div className='flex justify-between gap-2  '>
                  <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
                     <span className='text-6xl hover:text-red-800 transition-colors cursor-pointer'>
                        <SlScreenSmartphone />
                     </span>
                     <span className='text-gray-900/70'>Smartphone</span>
                  </div>
                  <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
                     <span className='text-6xl hover:text-red-800 transition-colors cursor-pointer'>
                        <PiWatchFill />
                     </span>
                     <span className='text-gray-900/70'>Smartwatch</span>
                  </div>
                  <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
                     <span className='text-6xl hover:text-red-800 transition-colors cursor-pointer'>
                        <ImHeadphones />
                     </span>
                     <span className='text-gray-900/70'>Headphone</span>
                  </div>
                  <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
                     <span className='text-6xl hover:text-red-800 transition-colors cursor-pointer'>
                        <BsLaptop />
                     </span>
                     <span className='text-gray-900/70'> Laptop </span>
                  </div>
                  <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
                     <span className='text-6xl hover:text-red-800 transition-colors cursor-pointer'>
                        <MdPhotoCamera />
                     </span>
                     <span className='text-gray-900/70'>Camera</span>
                  </div>
                  <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
                     <span className='text-6xl hover:text-red-800 transition-colors cursor-pointer'>
                        <TbDeviceAirpods />
                     </span>
                     <span className='text-gray-900/70'> Earbuds </span>
                  </div>
                  <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
                     <span className='text-6xl hover:text-red-800 transition-colors cursor-pointer'>
                        <BsHeadsetVr />
                     </span>
                     <span className='text-gray-900/70'> VR Box </span>
                  </div>
               </div>
            </section>
         </main>
      </Wrapper>
   )
}
export default Home
