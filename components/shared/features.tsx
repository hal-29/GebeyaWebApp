import { BadgeDollarSignIcon, Dices, Globe, TruckIcon } from 'lucide-react'

function Features() {
   return (
      <div className='flex items-center gap-8 mx-auto my-8 p-6 border rounded-3xl divide-x max-w-screen-2xl'>
         <div className='flex p-6 h-32 grow'>
            <span className='inline-flex justify-center items-center basis-1/4 shrink-0'>
               <TruckIcon size={28} />
            </span>
            <div className='flex flex-col justify-center grow'>
               <h1 className='font-semibold text-foreground'>Free shipping</h1>
               <p className='text-muted-foreground text-sm'>
                  On orders above $100.00
               </p>
            </div>
         </div>
         <div className='flex p-6 h-32 grow'>
            <span className='inline-flex justify-center items-center basis-1/4 shrink-0'>
               <Dices size={28} />
            </span>
            <div className='flex flex-col justify-center grow'>
               <h1 className='font-semibold text-foreground'>Easy return</h1>
               <p className='text-muted-foreground text-sm'>
                  Just phone number
               </p>
            </div>
         </div>
         <div className='flex p-6 h-32 grow'>
            <span className='inline-flex justify-center items-center basis-1/4 shrink-0'>
               <Globe size={28} />
            </span>
            <div className='flex flex-col justify-center grow'>
               <h1 className='font-semibold text-foreground'>
                  Worldwide delivery
               </h1>
               <p className='text-muted-foreground text-sm'>
                  Fast & reliable delivery
               </p>
            </div>
         </div>
         <div className='flex p-6 h-32 grow'>
            <span className='inline-flex justify-center items-center basis-1/4 shrink-0'>
               <BadgeDollarSignIcon size={28} />
            </span>
            <div className='flex flex-col justify-center grow'>
               <h1 className='font-semibold text-foreground'>Refunds Policy</h1>
               <p className='text-muted-foreground text-sm'>
                  60 days return for any
               </p>
            </div>
         </div>
      </div>
   )
}
export default Features
