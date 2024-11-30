import ProductCard from './ProductCard'

function Recommended() {
   return (
      <section className='flex flex-col gap-6 mx-auto py-20 max-w-screen-2xl'>
         <h1 className='font-semibold text-4xl'>
            <span>Recommendations. </span>
            <span className='text-muted-foreground'>
               Best matching products for you.
            </span>
         </h1>
         <div className='flex gap-4 py-6 w-full overflow-x-auto'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
      </section>
   )
}
export default Recommended
