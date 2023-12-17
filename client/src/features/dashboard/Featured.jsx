import { useSelector } from 'react-redux'
import Card from './Card'
import { Link } from 'react-router-dom'
import Loading from '../../ui/Loading'

function Featured() {
   const { phones, loading } = useSelector(store => store.home)

   if (loading) return <Loading />
   return (
      <section className='p-2 max-w-6xl mx-auto'>
         <div className='flex justify-between border-b-2 items-end py-2'>
            <h2 className='prose text-3xl border-primary'>
               Grab the best deal on
               <span className='text-primary'> Smartphones</span>
            </h2>
            <Link
               to={`product?category=phone`}
               className='btn btn-sm btn-ghost rounded-full'
            >
               View All
               <span className='fa-angle-right fa-solid'></span>
            </Link>
         </div>
         <div className='flex py-4 gap-4 overflow-x-auto'>
            {phones.map(phone => {
               return <Card key={phone.id} product={phone} />
            })}
         </div>
      </section>
   )
}
export default Featured
