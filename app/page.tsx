import BestSellers from '@/components/client/BestSellers'
import Brands from '@/components/client/Brands'
import Navbar from '@/components/client/Navbar'
import Recommended from '@/components/client/Recommended'
import Carousel from '@/components/shared/carousel'
import Features from '@/components/shared/features'

function Home() {
   return (
      <>
         <header className='py-4'>
            <Navbar />
            <Carousel />
         </header>
         <main className='h-svh'>
            <Features />
            <Brands />
            <Recommended />
            <BestSellers />
            <section className='flex bg-gray-100 mx-auto p-10 rounded-3xl max-w-screen-2xl'>
               <div className='flex flex-col gap-3'>
                  <p className='text-muted-foreground text-xl'>
                     100% Genuine Products
                  </p>
                  <p className='font-semibold text-4xl'>
                     Top brands, best quality products at the best price.
                  </p>
                  <p className='text-lg text-muted-foreground'>
                     We ensure the quality of the products we sell. We have
                     partnered with the top brands to provide you with the best
                     quality products at the best price.
                  </p>
               </div>
            </section>
         </main>
      </>
   )
}
export default Home
