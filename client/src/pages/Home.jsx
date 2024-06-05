import Hero from '../components/Hero'
import Featured from '../components/Featured'
import TopCatagory from '../components/TopCatagory'
import TrendingCollection from '../components/TrendingCollection'
import SpecialProducts from '../components/SpecialProducts'
import DealOfTheDay from '../components/DealOfTheDay'

function Home() {
   return (
      <main className='py-2'>
         <Hero />
         <Featured />
         <TopCatagory />
         <TrendingCollection />
         <SpecialProducts />
         <DealOfTheDay />
      </main>
   )
}
export default Home
