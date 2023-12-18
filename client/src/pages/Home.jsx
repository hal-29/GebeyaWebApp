import { useEffect } from 'react'
import Dashboard from '../features/dashboard/Dashboard'

function Home() {
   useEffect(() => {
      document.title = 'Emarket | Buy electronic devices'
   })
   return (
      <main>
         <Dashboard />
      </main>
   )
}

export default Home
