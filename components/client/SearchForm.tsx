import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function SearchForm() {
   return (
      <form className='inline-flex justify-center items-center bg-white h-10 grow'>
         <Select>
            <SelectTrigger className='bg-gray-100 px-4 border-none rounded-l-full rounded-r-none w-32 h-full'>
               <SelectValue placeholder='All' />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
               </SelectGroup>
            </SelectContent>
         </Select>
         <Input
            placeholder='Search'
            className='border-y-0 bg-gray-100 rounded-none max-w-sm h-full'
         />
         <Button
            variant='secondary'
            className='rounded-l-none rounded-r-full h-full'
         >
            <Search size={20} />
         </Button>
      </form>
   )
}
export default SearchForm
