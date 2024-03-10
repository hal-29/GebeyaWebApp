import { TiDelete } from 'react-icons/ti'

function CartItem() {
   return (
      <div className='flex gap-2 border p-2'>
         <span className='basis-1/3 grow-0'>
            <img
               src='https://cdn0.it4profit.com/s3size/rt:fill/w:510/h:510/g:no/el:1/f:webp/plain/s3://cms/product/3a/6b/3a6b6051d423deb8f329bc3538138d1a/231117150016627996.webp'
               alt='product image'
            />
         </span>
         <div className='flex flex-col gap-2 grow'>
            <h3 className=''>Laptop 2tb / black</h3>
            <p className='flex gap-3'>
               <span>1x</span>
               <span className='font-semibold'>Rs. 223.00</span>
            </p>
            <div className='flex justify-between '>
               <span>
                  <input
                     type='number'
                     min={1}
                     defaultValue={1}
                     className='border w-14 h-10 p-1 text-lg'
                  />
               </span>
               <span className='text-3xl cursor-pointer self-center rounded-full text-gray-800/90'>
                  <TiDelete />
               </span>
            </div>
         </div>
      </div>
   )
}
export default CartItem
