import { Link } from 'react-router-dom'

function Redirect() {
   return (
      <div className='text-3xl h-[80vh] flex flex-col justify-center items-center'>
         <h2 className='font-bold'>
            Please sign in first to access this page.
         </h2>
         <Link to='/signup' className='text-primary'>
            Login or Signup
         </Link>
      </div>
   )
}
export default Redirect
