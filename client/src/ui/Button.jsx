/* eslint-disable react/prop-types */
function Button({
   label,
   type = '',
   loading,
   onClick,
   secondary = false,
   disabled = false,
   divEl = false,
   inline = false,
}) {
   const style = secondary
      ? `cursor-pointer flex  gap-3 w-full ${
           inline && 'max-w-[6rem]'
        } items-center justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
           disabled && 'opacity-75 cursor-not-allowed hover:bg-gray-600'
        }`
      : `cursor-pointer flex  gap-3 w-full ${
           inline && 'max-w-[6rem]'
        }  items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
           disabled && 'opacity-75 cursor-not-allowed hover:bg-indigo-600'
        }`

   if (divEl)
      return (
         <div onClick={e => onClick?.(e)} type={type} className={style}>
            {loading && (
               <span className='fa-solid fa-spinner fa-spin text-xl '></span>
            )}

            {label}
         </div>
      )
   return (
      <button onClick={e => onClick?.(e)} type={type} className={style}>
         {loading && (
            <span className='fa-solid fa-spinner fa-spin text-xl '></span>
         )}

         {label}
      </button>
   )
}

export default Button
