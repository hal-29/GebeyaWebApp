import { ArrowRight } from 'lucide-react'

function Brands() {
   return (
      <section className='flex flex-col gap-6 mx-auto py-20 max-w-screen-2xl'>
         <h1 className='font-semibold text-4xl'>
            <span>Start exploring. </span>
            <span className='text-muted-foreground'>
               Good things are waiting for you.
            </span>
         </h1>
         <div className='flex gap-6'>
            <div className='flex justify-between items-center p-4 border rounded-2xl divide-x grow'>
               <div className='flex flex-col p-4'>
                  <h1 className='font-medium text-lg'>Mobile Phones</h1>
                  <p className='text-muted-foreground text-sm'>
                     Starting at $100.00
                  </p>
               </div>
               <div className='flex gap-3 p-4 text-muted-foreground text-sm hover:text-foreground uppercase cursor-pointer'>
                  <span>shop now</span>
                  <span>
                     <ArrowRight size={24} />
                  </span>
               </div>
            </div>
            <div className='flex justify-between items-center p-4 border rounded-2xl divide-x grow'>
               <div className='flex flex-col p-4'>
                  <h1 className='font-medium text-lg'>Mobile Phones</h1>
                  <p className='text-muted-foreground text-sm'>
                     Starting at $100.00
                  </p>
               </div>
               <div className='flex gap-3 p-4 text-muted-foreground text-sm hover:text-foreground uppercase cursor-pointer'>
                  <span>shop now</span>
                  <span>
                     <ArrowRight size={24} />
                  </span>
               </div>
            </div>
            <div className='flex justify-between items-center p-4 border rounded-2xl divide-x grow'>
               <div className='flex flex-col p-4'>
                  <h1 className='font-medium text-lg'>Mobile Phones</h1>
                  <p className='text-muted-foreground text-sm'>
                     Starting at $100.00
                  </p>
               </div>
               <div className='flex gap-3 p-4 text-muted-foreground text-sm hover:text-foreground uppercase cursor-pointer'>
                  <span>shop now</span>
                  <span>
                     <ArrowRight size={24} />
                  </span>
               </div>
            </div>
            <div className='flex justify-between items-center p-4 border rounded-2xl divide-x grow'>
               <div className='flex flex-col p-4'>
                  <h1 className='font-medium text-lg'>Mobile Phones</h1>
                  <p className='text-muted-foreground text-sm'>
                     Starting at $100.00
                  </p>
               </div>
               <div className='flex gap-3 p-4 text-muted-foreground text-sm hover:text-foreground uppercase cursor-pointer'>
                  <span>shop now</span>
                  <span>
                     <ArrowRight size={24} />
                  </span>
               </div>
            </div>
         </div>
      </section>
   )
}
export default Brands
