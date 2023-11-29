function Container({ children }) {
   return (
      <div className='flex flex-col mx-auto min-h-screen relative pt-16'>
         {children}
      </div>
   )
}

export default Container
