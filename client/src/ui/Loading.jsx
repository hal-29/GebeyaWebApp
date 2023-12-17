function Loading() {
   return (
      <div className='w-full h-full'>
         <div className='flex-col gap-4 w-full h-full flex items-center justify-center'>
            <div className='w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full'>
               <svg
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  height='1em'
                  width='1em'
                  className='animate-ping'
               >
                  <path d='7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z'></path>
               </svg>
            </div>
         </div>
      </div>
   )
}
export default Loading
