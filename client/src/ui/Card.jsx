function Card() {
   return (
      <div className='flex flex-col min-w-52 h-full'>
         <div className='bg-gray-200/80 p-8'>
            <img
               src='https://cdn0.it4profit.com/s3size/rt:fill/w:1024/h:1024/g:no/el:1/f:webp/plain/s3://cms/product/0a/1e/0a1e4b0d06b4f5a846a8e717e19c0eab/221201150009625631.webp'
               alt='product image'
               className='w-full h-full object-contain'
            />
         </div>
         <div className='flex flex-col justify-center items-center grow'>
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
