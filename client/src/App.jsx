import { RouterProvider } from 'react-router-dom'
import router from './router'
import Navbar from './ui/Navbar'

function App() {
   return (
      <>
         <Navbar />
         <RouterProvider router={router} />
      </>
   )
}

export default App
