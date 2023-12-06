import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { fetchPhones } from './homeSlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Featured() {
   const { phones, loading } = useSelector(store => store.home)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchPhones(10))
   }, [dispatch])

   if (loading) {
      return <div className='text-5xl'>Loading...</div>
   }
   return (
      <section className='p-2 max-w-6xl mx-auto'>
         <div className='flex justify-between border-b-2 items-end py-2'>
            <h2 className='prose text-3xl border-primary'>
               Grab the best deal on
               <span className='text-primary'> Smartphones</span>
            </h2>
            <Link
               to={`product?category=mobiles`}
               className='btn btn-sm btn-ghost rounded-full'
            >
               View All
               <span className='fa-angle-right fa-solid'></span>
            </Link>
         </div>
         <div className='flex py-4 gap-4 overflow-x-auto'>
            {phones.map(phone => {
               return <Card key={phone._id} phone={phone} />
            })}
         </div>
      </section>
   )
}
export default Featured
