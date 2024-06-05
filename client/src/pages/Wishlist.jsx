import Card from '../ui/Card'

function Wishlist() {
   return (
      <main className='py-6'>
         <h1 className='text-2xl'>Wishlists</h1>
         <section className='gap-3 grid grid-cols-5 py-6'>
            {Array(10)
               .fill()
               .map((_, i) => (
                  <Card key={i} />
               ))}
         </section>
      </main>
   )
}
export default Wishlist
