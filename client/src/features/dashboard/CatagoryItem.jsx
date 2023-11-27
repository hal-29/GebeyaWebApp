function CatagoryItem({ img, label }) {
   return (
      <div className='flex flex-col items-center w-40 h-48 cursor-pointer'>
         <div className='w-full aspect-square overflow-hidden rounded-full border-2 hover:border-primary'>
            <img src={img} alt={label} className='w-full h-full object-cover' />
         </div>
         <div className='text-2xl text-primary'>{label}</div>
      </div>
   )
}
export default CatagoryItem
