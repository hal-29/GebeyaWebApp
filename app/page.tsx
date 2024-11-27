import Navbar from '@/components/client/Navbar'
import Carousel from '@/components/shared/carousel'
import Features from '@/components/shared/features'

function Home() {
   return (
      <>
         <header className='py-4'>
            <Navbar />
            <Carousel />
            <Features />
         </header>
         <main className='h-svh'></main>
      </>
   )
}
export default Home
