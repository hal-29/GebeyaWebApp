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

function SearchForm() {
   return (
      <form className='inline-flex justify-center items-center bg-white grow'>
         <Select>
            <SelectTrigger className='rounded-r-none w-[180px]'>
               <SelectValue placeholder='Select category' />
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
         <Input placeholder='Search' className='rounded-none max-w-md' />
         <Button variant='secondary' className='rounded-l-none'>
            Search
         </Button>
      </form>
   )
}
export default SearchForm
