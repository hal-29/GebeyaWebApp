import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchInput() {
   const [value, setValue] = useState('')
   const navigate = useNavigate()
   const submitHandler = e => {
      e.preventDefault()
      navigate(`/search?q=${value}`)
      setValue('')
   }

   return (
      <form
         onSubmit={submitHandler}
         className='w-full sm:w-auto flex justify-center'
      >
         <div className='join w-full'>
            <input
               value={value}
               onChange={e => setValue(e.target.value)}
               className='input-sm input-bordered join-item rounded-l-full grow'
               placeholder='Search'
            />
            <button className='btn btn-sm join-item rounded-r-full'>
               <span className='fa-solid fa-magnifying-glass font-bold text-2xl color-neutral'></span>
            </button>
         </div>
      </form>
   )
}
export default SearchInput
