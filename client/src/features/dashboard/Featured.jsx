import useFetch from '../../hooks/useFetch'
import Card from './Card'

function Featured() {
   // const { data, loading, error } = useFetch({ url: 'product/phones' })

   // if (loading) {
   //    return <section className='text-5xl'>Loading...</section>
   // }

   return (
      <section className='p-2 max-w-6xl mx-auto'>
         <div className='flex justify-between border-b-2 items-end py-2'>
            <h2 className='prose text-3xl border-primary'>
               Grab the best deal on
               <span className='text-primary'> Smartphones</span>
            </h2>
            <div className='btn btn-sm btn-ghost rounded-full'>
               View All
               <span className='fa-angle-right fa-solid'></span>
            </div>
         </div>
         <div className='flex py-4 gap-4'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </section>
   )
}
export default Featured
