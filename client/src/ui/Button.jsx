function Button({
   label,
   type = '',
   loading,
   onClick,
   element,
   secondary = false,
}) {
   const style = secondary
      ? 'flex  gap-3 w-full items-center justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
      : 'flex  gap-3 w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'

   return (
      <button onClick={e => onClick?.(e)} type={type} className={style}>
         {loading && (
            <span className='fa-solid fa-spinner fa-spin text-xl'></span>
         )}

         {label}
      </button>
   )
}

export default Button
