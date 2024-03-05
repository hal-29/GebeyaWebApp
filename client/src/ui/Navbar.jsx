import Wrapper from './Wrapper'

function Navbar() {
   return (
      <div>
         <nav className='text  text-gray-800/90 py-2  bg-gray-100/90'>
            <Wrapper className='flex  justify-between'>
               <h4 className=''>welcome to electonic store</h4>
               <div className=''>My account</div>
            </Wrapper>
         </nav>
      </div>
   )
}
export default Navbar
