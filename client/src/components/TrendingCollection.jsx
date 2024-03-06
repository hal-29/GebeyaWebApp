import Card from '../ui/Card'

function TrendingCollection() {
   return (
      <section className='flex flex-col justify-center py-2 min-h-80'>
         <h1 className='py-6 font-semibold text-2xl text-center text-gray-900/90 capitalize'>
            Trending Collection
         </h1>
         <div className='flex justify-center gap-6 pt-4 pb-8'>
            <div className='bg-red-800/90 hover:bg-gray-800/90 px-8 py-3 text-gray-100 uppercase transition cursor-pointer'>
               new products
            </div>
            <div className='bg-red-800/90 hover:bg-gray-800/90 px-8 py-3 text-gray-100 uppercase transition cursor-pointer'>
               featured products
            </div>
            <div className='bg-red-800/90 hover:bg-gray-800/90 px-8 py-3 text-gray-100 uppercase transition cursor-pointer'>
               best seller
            </div>
         </div>
         <div className='gap-6 grid grid-cols-5 grid-rows-[repeat(auto-fill,_25rem)] p-3'>
            <Card />
            <Card />
            <Card />
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
export default TrendingCollection
