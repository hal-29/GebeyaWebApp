import Link from 'next/link'
import SearchForm from './SearchForm'
import { Bookmark, HeartIcon, ShoppingBag, UserCircle2 } from 'lucide-react'
import { Button } from '../ui/button'

function Navbar() {
   return (
      <div className='top-0 left-0 z-50 fixed bg-white shadow-sm w-full'>
         <nav className='flex justify-end items-center gap-6 backdrop-blur-md mx-auto px-8 py-4 max-w-screen-2xl'>
            <div className=''>Logo</div>
            <SearchForm />
            <div className='inline-flex items-center text-muted-foreground'>
               <span className='inline-flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 hover:text-foreground transition cursor-pointer'>
                  <Bookmark size={20} />
               </span>
               <span className='inline-flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 hover:text-foreground transition cursor-pointer'>
                  <HeartIcon size={20} />
               </span>
               <span className='inline-flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 hover:text-foreground transition cursor-pointer'>
                  <UserCircle2 size={20} />
               </span>
               <span className='inline-flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 hover:text-foreground transition cursor-pointer'>
                  <ShoppingBag size={20} />
               </span>
            </div>
            <div className='flex items-center gap-2'>
               <Button className='rounded-full w-24' asChild variant='outline'>
                  <Link href='signup'>Sign Up</Link>
               </Button>
               <Button className='rounded-full w-24' asChild variant='default'>
                  <Link href='login'>Login</Link>
               </Button>
            </div>
         </nav>
      </div>
   )
}
export default Navbar
