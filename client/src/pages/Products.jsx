import Card from '../ui/Card'
import { PiListMagnifyingGlass } from 'react-icons/pi'

function Products() {
   return (
      <main className=''>
         <section className='inline-grid grid-cols-[minmax(24rem,1fr)_3fr] grid-rows-[min-content,1fr,minmax(min-content,10rem)]'>
            <div className='col-span-full flex justify-between items-center py-4 px-2'>
               <h1 className='font-semibold text-2xl text-gray-800/90'>
                  Electronics
               </h1>
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
         </section>
         <section className='flex flex-col justify-center py-2 min-h-80'>
            <h1 className='py-6 font-semibold text-2xl  text-gray-900/90 capitalize'>
               Smart Watches
            </h1>
            <div className='grid grid-cols-4 gap-4'>
               {Array(4)
                  .fill('')
                  .map((_, i) => (
                     <Card key={i} />
                  ))}
            </div>
         </section>
         <section className='flex flex-col justify-center py-2 min-h-80'>
            <h1 className='py-6 font-semibold text-2xl  text-gray-900/90 capitalize'>
               Smartphones
            </h1>
            <div className='grid grid-cols-4 gap-4'>
               {Array(4)
                  .fill('')
                  .map((_, i) => (
                     <Card key={i} />
                  ))}
            </div>
         </section>
         <section className='flex flex-col justify-center py-2 min-h-80'>
            <h1 className='py-6 font-semibold text-2xl  text-gray-900/90 capitalize'>
               Laptops
            </h1>
            <div className='grid grid-cols-4 gap-4'>
               {Array(4)
                  .fill('')
                  .map((_, i) => (
                     <Card key={i} />
                  ))}
            </div>
         </section>
         <section className='flex flex-col justify-center py-2 min-h-80'>
            <h1 className='py-6 font-semibold text-2xl  text-gray-900/90 capitalize'>
               Cameras
            </h1>
            <div className='grid grid-cols-4 gap-4'>
               {Array(4)
                  .fill('')
                  .map((_, i) => (
                     <Card key={i} />
                  ))}
            </div>
         </section>
      </main>
   )
}
export default Products
