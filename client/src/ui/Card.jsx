import { FaHeart, FaPlus } from 'react-icons/fa'

function Card() {
   return (
      <div className='relative flex flex-col shadow-sm min-w-52 h-full overflow-clip group'>
         <span className='group-hover:top-0 -top-10 left-0 absolute bg-gray-400 w-10 h-10 transition-all cursor-pointer'>
            <FaHeart className='m-3 text-gray-50 text-lg' />
         </span>
         <span className='group-hover:top-0 -top-10 right-0 absolute bg-gray-400 w-10 h-10 transition-all cursor-pointer'>
            <FaPlus className='m-3 text-gray-50 text-lg' />
         </span>
         <div className='bg-gray-200/80 p-8'>
            <img
               src='https://cdn0.it4profit.com/s3size/rt:fill/w:1024/h:1024/g:no/el:1/f:webp/plain/s3://cms/product/0a/1e/0a1e4b0d06b4f5a846a8e717e19c0eab/221201150009625631.webp'
               alt='product image'
               className='w-full h-full object-contain'
            />
         </div>
         <div className='flex flex-col justify-center items-center py-4 grow'>
            <span className='text-gray-600/90'>watch</span>
            <span>
               <strong>Rs.110.00 </strong>
               <strike className='text-gray-500'>Rs.130.00</strike>
            </span>
         </div>
      </div>
   )
}
export default Card
