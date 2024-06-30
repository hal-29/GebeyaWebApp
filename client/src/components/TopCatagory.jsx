import { MdPhotoCamera } from 'react-icons/md'
import { PiWatchFill } from 'react-icons/pi'
import { ImHeadphones } from 'react-icons/im'
import { BsLaptop, BsHeadsetVr } from 'react-icons/bs'
import { TbDeviceAirpods } from 'react-icons/tb'
import { SlScreenSmartphone } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

function TopCatagory() {
   const navigate = useNavigate()

   return (
      <section className='flex flex-col justify-center py-2 min-h-80'>
         <h1 className='py-6 font-semibold text-2xl text-center text-gray-900/90 capitalize'>
            top catagories
         </h1>
         <div className='flex justify-between gap-2'>
            <div
               className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'
               onClick={() => navigate('/products?category=Mobile')}
            >
               <span className='text-6xl hover:text-red-800 transition cursor-pointer'>
                  <SlScreenSmartphone />
               </span>
               <span className='text-gray-900/70'>Smartphone</span>
            </div>
            <div
               className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'
               onClick={() => navigate('/products?category=Wearable')}
            >
               <span className='text-6xl hover:text-red-800 transition cursor-pointer'>
                  <PiWatchFill />
               </span>
               <span className='text-gray-900/70'>Smartwatch</span>
            </div>
            <div
               className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'
               onClick={() => navigate('/products?category=Headphone')}
            >
               <span className='text-6xl hover:text-red-800 transition cursor-pointer'>
                  <ImHeadphones />
               </span>
               <span className='text-gray-900/70'>Headphone</span>
            </div>
            <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
               <span
                  className='text-6xl hover:text-red-800 transition cursor-pointer'
                  onClick={() => navigate('/products?category=Laptop')}
               >
                  <BsLaptop />
               </span>
               <span className='text-gray-900/70'> Laptop </span>
            </div>
            <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
               <span className='text-6xl hover:text-red-800 transition cursor-pointer'>
                  <MdPhotoCamera />
               </span>
               <span className='text-gray-900/70'>Camera</span>
            </div>
            <div
               className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'
               onClick={() => navigate('/products?category=Earbuds')}
            >
               <span className='text-6xl hover:text-red-800 transition cursor-pointer'>
                  <TbDeviceAirpods />
               </span>
               <span className='text-gray-900/70'> Earbuds </span>
            </div>
            <div className='flex flex-col gap-2 py-3 hover:scale-110 items-center transition'>
               <span
                  className='text-6xl hover:text-red-800 transition cursor-pointer'
                  onClick={() => navigate('/products?category=VR')}
               >
                  <BsHeadsetVr />
               </span>
               <span className='text-gray-900/70'> VR Box </span>
            </div>
         </div>
      </section>
   )
}
export default TopCatagory
