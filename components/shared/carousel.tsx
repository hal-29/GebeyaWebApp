import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Carousel() {
   return (
      <section className='relative flex h-[80svh] gradient'>
         <div className='flex mx-auto w-full max-w-screen-2xl h-full'>
            <div className='flex flex-col justify-center gap-8 h-full grow'>
               <h4 className='font-semibold text-foreground text-lg'>
                  Starting from $99.99
               </h4>
               <h1 className='font-semibold text-6xl leading-tight'>
                  Exclusive collection for every electroncs
               </h1>
               <Button className='rounded-full w-48 h-14 text-lg self-start'>
                  <span>Explore now</span>
                  <span>
                     <Search size={24} />
                  </span>
               </Button>
            </div>
            <div className='flex justify-center items-center h-full basis-2/5 shrink-0'>
               <Image src='/s24.png' alt='carousel' width={800} height={800} />
            </div>
         </div>
         <div className='inline-flex bottom-6 left-1/2 z-20 absolute justify-center items-center gap-4 -translate-x-1/2'>
            <span className='bg-foreground rounded-full w-10 h-2 cursor-pointer'></span>
            <span className='bg-foreground rounded-full w-2 h-2 cursor-pointer'></span>
            <span className='bg-foreground rounded-full w-2 h-2 cursor-pointer'></span>
            <span className='bg-foreground rounded-full w-2 h-2 cursor-pointer'></span>
            <span className='bg-foreground rounded-full w-2 h-2 cursor-pointer'></span>
            <span className='bg-foreground rounded-full w-2 h-2 cursor-pointer'></span>
         </div>
      </section>
   )
}
export default Carousel
