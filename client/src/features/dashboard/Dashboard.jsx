import Ads from './Ads'
import Carousel from './Carousel'
import Catagories from './Catagories'
import Featured from './Featured'

function Dashboard() {
   return (
      <>
         <Carousel />
         <Featured />
         <Catagories />
         <Ads />
      </>
   )
}

export default Dashboard
