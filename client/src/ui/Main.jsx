import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Main({ children }) {
   return (
      <main className='overflow-y-auto h-[90vh] relative p-2'>
         <ToastContainer />
         {children}
      </main>
   )
}
export default Main
