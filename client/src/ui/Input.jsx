/* eslint-disable react/prop-types */
export default function Input({
   name,
   label,
   value,
   type = 'text',
   placeholder = '',
   onChange,
   onBlur,
   error,
}) {
   return (
      <div>
         <label
            htmlFor={name}
            className='block text-sm font-medium leading-6 text-gray-900'
         >
            {label}
         </label>
         <div className='mt-2'>
            <input
               onChange={e => onChange?.(e)}
               onBlur={e => onBlur?.(e)}
               id={name}
               name={name}
               type={type}
               value={value}
               placeholder={placeholder}
               className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  error
                     ? 'ring-red-600 focus:ring-red-600'
                     : 'ring-gray-300  focus:ring-indigo-600'
               } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
            />
            {error && <span className='text-xs text-red-600'>{error}</span>}
         </div>
      </div>
   )
}
