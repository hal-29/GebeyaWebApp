import { useNavigate } from 'react-router-dom'

function Notfound() {
   const navigate = useNavigate(0)
   return (
      <main className='flex justify-center items-center h-svh'>
         <section className='flex flex-col gap-4 p-8 border'>
            <h1 className='font-semibold text-5xl text-center'>
               404 <br /> Page not found
            </h1>
            <p className='text-2xl text-center'>
               The page you are looking for does not exist.
            </p>
            <button
               onClick={() => navigate('/', { replace: true })}
               className='bg-red-800/90 p-3 text-gray-50'
            >
               Get back to Home
            </button>
         </section>
      </main>
   )
}
export default Notfound
