function Wrapper({ children, className }) {
   return (
      <div className={`mx-auto px-6 max-w-[1400px] ${className}`}>
         {children}
      </div>
   )
}
export default Wrapper
