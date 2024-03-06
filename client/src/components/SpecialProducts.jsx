import Card from '../ui/Card'

function SpecialProducts() {
   return (
      <section className='flex flex-col justify-center py-2 min-h-80'>
         <h1 className='py-6 font-semibold text-2xl text-center text-gray-900/90 capitalize'>
            Special Products
         </h1>
         <div className='flex gap-4 p-3 h-96 whitespace-nowrap overflow-x-auto special-products'>
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
export default SpecialProducts
