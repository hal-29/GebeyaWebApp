function Button({ label, type = '', loading, onClick }) {
   return (
      <button
         onClick={e => onClick?.(e)}
         type={type}
         className='flex  gap-3 w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
         {loading && (
            <span className='fa-solid fa-spinner fa-spin text-xl'></span>
         )}
         {label}
      </button>
   )
}

export default Button
