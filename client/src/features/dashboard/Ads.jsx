function Ads() {
   return (
      <section className='py-4'>
         <div className='flex justify-between border-b-2 py-3'>
            <h2 className='prose text-3xl border-primary'>
               Top
               <span className='text-primary'> Electronic companies</span>
            </h2>
            <div className='btn btn-sm btn-ghost rounded-full'>
               View All
               <span className='fa-angle-right fa-solid'></span>
            </div>
         </div>
         <div className='flex py-4 gap-4'>
            <div className='h-48 bg-primary/40 grow rounded-lg'></div>
            <div className='h-48 bg-primary/40 grow rounded-lg'></div>
            <div className='h-48 bg-primary/40 grow rounded-lg'></div>
         </div>
      </section>
   )
}
export default Ads
