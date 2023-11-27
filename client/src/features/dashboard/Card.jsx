function Card() {
   return (
      <div className='card glass  h-60 w-40  cursor-pointer border-none  bg-gray-100 backdrop-blur transition-all  hover:shadow-2xl hover:scale-105  hover:outline-primary hover:outline hover:outline-1'>
         <figure className=' '>
            <img
               src='https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png'
               alt='card'
            />
         </figure>
         <div className='card-body basis-1/4 border-t-2   p-0'>
            <div className='px-4 '>Xiaomi X45</div>
            <div className='flex justify-between px-4'>
               <span className='text-xs font-bold '>$770</span>
               <span className='text-xs  font-semibold  line-through '>
                  $900
               </span>
            </div>
            <div className='border-t-2 px-4 py-1 text-sm font-semibold text-success'>
               Save $130
            </div>
         </div>
      </div>
   )
}
export default Card
