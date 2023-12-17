import { useState } from 'react'

function Tag({ label, onValueChange }) {
   const [selected, setSelected] = useState(false)

   return (
      <span
         onClick={() => setSelected(pr => !pr)}
         className={`px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer transition ${
            selected ? 'bg-primary text-gray-100' : 'bg-gray-200'
         }`}
      >
         {selected && <span className='fa-solid fa-xmark'></span>}
         <span>{label}</span>
      </span>
   )
}
export default Tag
