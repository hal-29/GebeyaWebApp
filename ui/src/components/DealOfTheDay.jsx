import { useEffect, useState } from 'react'

const SECONDS = 1000
const MINUTES = 60 * SECONDS
const HOURS = 60 * MINUTES
const DAYS = 24 * HOURS
const endDate = new Date().getTime() + 15 * DAYS

function DealOfTheDay() {
   const [time, setTime] = useState({
      days: 15,
      hours: 0,
      minutes: 0,
      seconds: 0,
   })

   const countDown = () => {
      const difference = endDate - new Date().getTime()

      const days = Math.floor(difference / DAYS)
      const hours = Math.floor((difference % DAYS) / HOURS)
      const minutes = Math.floor((difference % HOURS) / MINUTES)
      const seconds = Math.floor((difference % MINUTES) / SECONDS)

      setTime({ days, hours, minutes, seconds })
   }

   useEffect(() => {
      const interval = setInterval(countDown, SECONDS)
      return () => clearInterval(interval)
   }, [time])

   return (
      <section className='flex flex-col bg-blue-200/50 py-14 min-h-80'>
         <h1 className='py-6 font-semibold text-2xl text-center text-gray-900/90 capitalize'>
            Deal of the Day
         </h1>
         <div className='flex lg:flex-row flex-col justify-center items-center gap-4 p-2 md:p-6'>
            <div className='flex sm:flex-row flex-col bg-gray-50 p-4 max-w-lg overflow-hidden'>
               <div className='bg-blue-200/50 p-3 basis-2/5 shrink-0'>
                  <img
                     src='https://pngimg.com/uploads/headphones/headphones_PNG101933.png'
                     alt='product image'
                     className='w-full h-full object-contain'
                  />
               </div>
               <div className='flex flex-col justify-center gap-2 p-8'>
                  <span className='font-semibold text-gray-900/70'>JBL</span>
                  <span className='flex gap-3'>
                     <strong>Rs.150</strong>
                     <strike className='text-gray-700'>Rs.180</strike>
                  </span>
                  <div className='inline-flex items-center gap-2'>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.days.toString().padStart(2, '0')}
                        </time>
                        <span>Day</span>
                     </span>
                     <span>:</span>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.hours.toString().padStart(2, '0')}
                        </time>
                        <span>Hrs</span>
                     </span>
                     <span>:</span>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.minutes.toString().padStart(2, '0')}
                        </time>
                        <span>Min</span>
                     </span>
                     <span>:</span>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.seconds.toString().padStart(2, '0')}
                        </time>
                        <span>Sec</span>
                     </span>
                  </div>
                  <div className='flex gap-3'>
                     <span className='flex justify-center items-center bg-red-800 hover:bg-gray-800 w-12 h-12 text-gray-50 transition cursor-pointer'>
                        C
                     </span>
                     <span className='flex justify-center items-center bg-red-800 hover:bg-gray-800 w-12 h-12 text-gray-50 transition cursor-pointer'>
                        C
                     </span>
                     <span className='flex justify-center items-center bg-red-800 hover:bg-gray-800 w-12 h-12 text-gray-50 transition cursor-pointer'>
                        C
                     </span>
                  </div>
               </div>
            </div>
            <div className='flex sm:flex-row flex-col bg-gray-50 p-4 max-w-lg overflow-hidden'>
               <div className='bg-blue-200/50 p-3 basis-2/5 shrink-0'>
                  <img
                     src='https://pngimg.com/uploads/headphones/headphones_PNG101933.png'
                     alt='product image'
                     className='w-full h-full object-contain'
                  />
               </div>
               <div className='flex flex-col justify-center gap-2 p-8'>
                  <span className='font-semibold text-gray-900/70'>JBL</span>
                  <span className='flex gap-3'>
                     <strong>Rs.150</strong>
                     <strike className='text-gray-700'>Rs.180</strike>
                  </span>
                  <div className='inline-flex items-center gap-2'>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.days.toString().padStart(2, '0')}
                        </time>
                        <span>Day</span>
                     </span>
                     <span>:</span>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.hours.toString().padStart(2, '0')}
                        </time>
                        <span>Hrs</span>
                     </span>
                     <span>:</span>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.minutes.toString().padStart(2, '0')}
                        </time>
                        <span>Min</span>
                     </span>
                     <span>:</span>
                     <span className='inline-flex flex-col items-center space-between'>
                        <time className='font-bold text-red-800'>
                           {time.seconds.toString().padStart(2, '0')}
                        </time>
                        <span>Sec</span>
                     </span>
                  </div>
                  <div className='flex gap-3'>
                     <span className='flex justify-center items-center bg-red-800 hover:bg-gray-800 w-12 h-12 text-gray-50 transition cursor-pointer'>
                        C
                     </span>
                     <span className='flex justify-center items-center bg-red-800 hover:bg-gray-800 w-12 h-12 text-gray-50 transition cursor-pointer'>
                        C
                     </span>
                     <span className='flex justify-center items-center bg-red-800 hover:bg-gray-800 w-12 h-12 text-gray-50 transition cursor-pointer'>
                        C
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
export default DealOfTheDay
