import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import Ads from './Ads'
import Carousel from './Carousel'
import Catagories from './Catagories'
import Featured from './Featured'
import { useSelector } from 'react-redux'
import Loading from '../../ui/Loading'

function Dashboard() {
   const location = useLocation()
   const toastify = location.state?.toast
   const loading = useSelector(store => store.home.loading)

   useEffect(() => {
      toastify?.type == 'success' && toast.success(toastify.message)
      toastify?.type == 'error' && toast.error(toastify.message)
      toastify?.type == 'info' && toast.info(toastify.message)
   }, [toastify])

   if (loading) return <Loading />
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
