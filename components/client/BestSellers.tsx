import ProductCard from './ProductCard'

function BestSellers() {
   return (
      <section className='flex flex-col gap-6 mx-auto py-20 max-w-screen-2xl'>
         <h1 className='font-semibold text-4xl'>
            <span>Best Sellers. </span>
            <span className='text-muted-foreground'>
               Most popular products.
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
export default BestSellers
