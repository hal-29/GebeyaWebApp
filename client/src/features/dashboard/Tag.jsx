import { useState } from 'react'

function Tag({ label }) {
   const [selected, setSelected] = useState(false)
   return (
      <span
         onClick={() => setSelected(prev => !prev)}
         className={`btn btn-sm  ${selected && 'btn-primary'} rounded-full`}
      >
         {label}
         {selected && <span className='fa-circle-xmark fa-solid'></span>}
      </span>
   )
}

export default Tag
