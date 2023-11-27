import CatagoryItem from './CatagoryItem'

function Catagories() {
   return (
      <section className='py-4'>
         <div className='flex justify-between border-b-2 py-3'>
            <h2 className='prose text-3xl border-primary'>
               Shop from
               <span className='text-primary'> Top Catagories</span>
            </h2>
            <div className='btn btn-sm btn-ghost rounded-full'>
               View All
               <span className='fa-angle-right fa-solid'></span>
            </div>
         </div>
         <div className='flex py-4  gap-6'>
            <CatagoryItem
               label='Mobiles'
               img='https://images.unsplash.com/photo-1605404771292-1b900467c5e8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoaXRlJTIwaXBob25lJTIwMTF8ZW58MHx8MHx8fDA%3D'
            />
            <CatagoryItem
               label='Watches'
               img='https://hammeronline.in/cdn/shop/files/HammerGlideBlack.webp?v=1694851875&width=1080'
            />
            <CatagoryItem
               label='Laptops'
               img='https://i.ebayimg.com/images/g/lH0AAOSwJfhj6s6x/s-l1200.jpg'
            />
            <CatagoryItem
               label='Airpods'
               img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Y9chYaOBUVSIgDUp8G8MTAb7rgH3GTUudQ&usqp=CAU'
            />
            <CatagoryItem
               label='Headphones'
               img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgdN2SExEAN_JfGIA0PiSDhHYeLX8h4Q9bw&usqp=CAU'
            />
            <CatagoryItem
               label='VR headsets'
               img='https://www.vive.com/media/filer_public/vive/product-listing/hero-vive-focus-series.png'
            />
         </div>
      </section>
   )
}
export default Catagories