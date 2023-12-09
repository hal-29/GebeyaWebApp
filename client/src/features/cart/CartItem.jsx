function CartItem() {
   return (
      <div className='flex  gap-3  p-4 border-b relative'>
         <div className='basis-1/4 shrink-0 rounded-lg overflow-hidden'>
            <img
               className='h-full w-full object-cover'
               src='https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-52..v1696534815.jpg'
               alt='cart item'
            />
         </div>
         <div className='flex flex-col grow'>
            <h3 className='text-lg font-semibold'>Samsung Galaxy S23 Ultra</h3>
            <p className='text-sm text-gray-700/80'>samsung.co</p>
         </div>
         <div className='flex items-end'>
            <div className='join '>
               <input
                  type='number'
                  className='join-item input input-bordered max-w-xs w-16 py-0 px-2 text-xl bg-gray-100'
               />
            </div>
         </div>
         <div className='text-2xl font-bold flex items-end'>$249</div>
         <span className='absolute z-10 right-2 top-2 px-2 bg-gray-300 rounded-full cursor-pointer'>
            <span className='text-lg fa-solid fa-xmark'></span>
         </span>
      </div>
   )
}
export default CartItem

// <div className='relative max-w-2xl h-48 p-3 border shadow-md flex gap-2'>
{
   /* <div className='basis-1/4 shrink-0 h-full rounded-lg overflow-hidden'>
   <img
      className='h-full w-full object-cover'
      src='https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-52..v1696534815.jpg'
      alt='cart item'
   />
</div> */
}

// <div className='flex flex-col gap-6 justify-evenly   grow'>
//    <h4 className='text-2xl'>Iphone 14 Pro</h4>
//    <div className='flex justify-between items-end'>
// <div className='join'>
//    <span className='btn btn-md text-xl join-item'>-</span>
//    <span className='join-item text-xl px-4  flex items-center bg-gray-100'>
//       1
//    </span>
//    <span className='btn btn-md  text-xl join-item'>+</span>
// </div>
//       <span className='text-2xl font-bold'>x1</span>
//       <span className='font-bold text-3xl'>$1,099</span>
//    </div>
// </div>
{
   /* <span className='absolute z-10 right-2 top-2 px-2 bg-gray-300 rounded-full cursor-pointer'>
   <span className='text-lg fa-solid fa-xmark'></span>
</span> */
}
// </div>
