import { Bookmark, Heart, ShoppingBag, Star } from 'lucide-react'
import Image from 'next/image'

function ProductCard() {
   return (
      <div className='flex flex-col bg-gray-50/70 rounded-3xl w-72 overflow-clip shrink-0'>
         <div className='bg-gray-100 p-2 rounded-3xl h-80 overflow-clip'>
            <Image
               src='/s24.png'
               alt='product'
               width={200}
               height={200}
               className='w-full h-full object-contain'
            />
         </div>
         <div className='flex flex-col gap-1 p-4 min-h-32'>
            <h4 className='flex justify-between items-center font-semibold text-sm'>
               <span>Samsung Galaxy S24</span>
               <span>$1099.00</span>
            </h4>
            <p className='flex justify-between items-center text-muted-foreground text-sm'>
               <span>Mobile</span>
               <span className='line-through'>$1299.00</span>
            </p>
            <div className='flex justify-between items-center mt-auto'>
               <div className='flex items-center gap-2 text-muted-foreground'>
                  <span className='text-yellow-400'>
                     <Star fill='#facc15' size={20} />
                  </span>
                  <span>4.8 (120)</span>
               </div>
               <div className='inline-flex items-center text-muted-foreground'>
                  <span className='inline-flex justify-center items-center hover:bg-gray-100 rounded-full w-8 h-8 cursor-pointer'>
                     <Heart size={20} />
                  </span>
                  <span className='inline-flex justify-center items-center hover:bg-gray-100 rounded-full w-8 h-8 cursor-pointer'>
                     <Bookmark size={20} />
                  </span>
                  <span className='inline-flex justify-center items-center hover:bg-gray-100 rounded-full w-8 h-8 cursor-pointer'>
                     <ShoppingBag size={20} />
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}
export default ProductCard
