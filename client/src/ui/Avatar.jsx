function Avatar({ src, onClick }) {
   return (
      <label className='w-12 h-12 rounded-full overflow-hidden cursor-pointer border-gray-500 border-2'>
         <img
            onClick={onClick}
            src={src}
            alt='avatar'
            className='w-full h-full object-cover'
         />
      </label>
   )
}
export default Avatar
