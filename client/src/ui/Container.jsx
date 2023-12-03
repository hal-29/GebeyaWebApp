import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Container({ children }) {
   return (
      <div className='flex flex-col mx-auto min-h-screen relative pt-16'>
         <ToastContainer />
         {children}
      </div>
   )
}

export default Container
