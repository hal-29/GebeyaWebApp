function Container({ children }) {
   return (
      <div className='grid grid-cols-[14rem_1fr] grid-rows-[min-content_1fr_min-content] min-h-screen'>
         {children}
      </div>
   )
}

export default Container
