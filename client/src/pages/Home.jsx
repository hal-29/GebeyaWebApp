import Wrapper from '../ui/Wrapper'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import TopCatagory from '../components/TopCatagory'
import TrendingCollection from '../components/TrendingCollection'
import SpecialProducts from '../components/SpecialProducts'
import DealOfTheDay from '../components/DealOfTheDay'

function Home() {
   return (
      <Wrapper>
         <Hero />
         <main className='py-2'>
            <Featured />
            <TopCatagory />
            <TrendingCollection />
            <SpecialProducts />
            <DealOfTheDay />
         </main>
      </Wrapper>
   )
}
export default Home
