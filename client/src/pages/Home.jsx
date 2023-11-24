function Home() {
   return (
      <main>
         <div className='flex gap-2 py-2 border-b-2'>
            <span className='btn btn-sm  btn-primary rounded-full'>
               Laptops
               <span className='fa-circle-xmark fa-solid'></span>
            </span>
            <span className='btn btn-sm btn-primary  rounded-full'>
               Smart phones
               <span className='fa-circle-xmark fa-solid'></span>
            </span>
            <span className='btn btn-sm  btn-primary rounded-full'>
               Smart Watches
               <span className='fa-circle-xmark fa-solid'></span>
            </span>
            <span className='btn btn-sm  rounded-full'>Airpods</span>
            <span className='btn btn-sm  rounded-full'>Headphones</span>
            <span className='btn btn-sm  rounded-full'>VR headsets</span>
            <span className='btn btn-sm  rounded-full'>Dongles</span>
            <span className='btn btn-sm  rounded-full'>Televisions</span>
            <span className='btn btn-sm  rounded-full'>Refrigirators</span>
            <span className='btn btn-sm  rounded-full'>Loundaries</span>
         </div>
         <section className='h-80'>
            <div className='carousel w-full max-h-full pt-4 pb-12 '>
               <div
                  id='slide1'
                  className='carousel-item relative w-full rounded-xl overflow-hidden'
               >
                  <img
                     src='https://images.unsplash.com/photo-1662348318167-d521a9524cce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cm9uaWMlMjBnYWRnZXR8ZW58MHx8MHx8fDA%3D'
                     className='w-full h-full object-cover'
                  />
                  <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                     <a href='#slide4' className='btn btn-circle'>
                        ❮
                     </a>
                     <a href='#slide2' className='btn btn-circle'>
                        ❯
                     </a>
                  </div>
               </div>
               <div
                  id='slide2'
                  className='carousel-item relative w-full rounded-xl overflow-hidden'
               >
                  <img
                     src='https://images.unsplash.com/photo-1687727764456-1ee2b9cd8815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWMlMjBnYWRnZXR8ZW58MHx8MHx8fDA%3D'
                     className='w-full h-full object-cover'
                  />
                  <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                     <a href='#slide1' className='btn btn-circle'>
                        ❮
                     </a>
                     <a href='#slide3' className='btn btn-circle'>
                        ❯
                     </a>
                  </div>
               </div>
               <div
                  id='slide3'
                  className='carousel-item relative w-full rounded-xl overflow-hidden'
               >
                  <img
                     src='https://images.unsplash.com/photo-1680113729613-7635a0b8be09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGVsZWN0cm9uaWMlMjBnYWRnZXR8ZW58MHx8MHx8fDA%3D'
                     className='w-full h-full object-cover'
                  />
                  <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                     <a href='#slide2' className='btn btn-circle'>
                        ❮
                     </a>
                     <a href='#slide4' className='btn btn-circle'>
                        ❯
                     </a>
                  </div>
               </div>
               <div
                  id='slide4'
                  className='carousel-item relative w-full rounded-xl overflow-hidden'
               >
                  <img
                     src='https://images.unsplash.com/photo-1678057632872-ba572c4367e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGVsZWN0cm9uaWMlMjBnYWRnZXR8ZW58MHx8MHx8fDA%3D'
                     className='w-full h-full object-cover'
                  />
                  <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                     <a href='#slide3' className='btn btn-circle'>
                        ❮
                     </a>
                     <a href='#slide1' className='btn btn-circle'>
                        ❯
                     </a>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className='flex justify-between border-b-2 items-end'>
               <h2 className='prose text-2xl font-bold border-b-2 border-primary'>
                  Grab the best deal on
                  <span className='text-primary'> Smartphones</span>
               </h2>
               <div className='btn btn-sm btn-ghost rounded-full'>
                  View All
                  <span className='fa-angle-right fa-solid'></span>
               </div>
            </div>
            <div className='flex py-4 gap-4'>
               <div className='card w-56 glass cursor-pointer '>
                  <figure className='bg-neutral-content'>
                     <img
                        src='https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png'
                        alt='car!'
                     />
                  </figure>
                  <div className='card-body basis-1/3 p-0 pt-4'>
                     <div className='font-semibold px-4'>Xiaomi X45</div>
                     <div className='px-4 flex justify-between'>
                        <span className='font-bold text-sm '>$770</span>
                        <span className='font-semibold  line-through  text-sm '>
                           $900
                        </span>
                     </div>
                     <div className='border-t-2 px-4 text-success font-semibold text-sm'>
                        Save - $130
                     </div>
                  </div>
               </div>
               <div className='card w-56 glass cursor-pointer '>
                  <figure className='bg-neutral-content'>
                     <img
                        src='https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png'
                        alt='car!'
                     />
                  </figure>
                  <div className='card-body basis-1/3 p-0 pt-4'>
                     <div className='font-semibold px-4'>Xiaomi X45</div>
                     <div className='px-4 flex justify-between'>
                        <span className='font-bold text-sm '>$770</span>
                        <span className='font-semibold  line-through  text-sm '>
                           $900
                        </span>
                     </div>
                     <div className='border-t-2 px-4 text-success font-semibold text-sm'>
                        Save - $130
                     </div>
                  </div>
               </div>
               <div className='card w-56 glass cursor-pointer '>
                  <figure className='bg-neutral-content'>
                     <img
                        src='https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png'
                        alt='car!'
                     />
                  </figure>
                  <div className='card-body basis-1/3 p-0 pt-4'>
                     <div className='font-semibold px-4'>Xiaomi X45</div>
                     <div className='px-4 flex justify-between'>
                        <span className='font-bold text-sm '>$770</span>
                        <span className='font-semibold  line-through  text-sm '>
                           $900
                        </span>
                     </div>
                     <div className='border-t-2 px-4 text-success font-semibold text-sm'>
                        Save - $130
                     </div>
                  </div>
               </div>
               <div className='card w-56 glass cursor-pointer '>
                  <figure className='bg-neutral-content'>
                     <img
                        src='https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png'
                        alt='car!'
                     />
                  </figure>
                  <div className='card-body basis-1/3 p-0 pt-4'>
                     <div className='font-semibold px-4'>Xiaomi X45</div>
                     <div className='px-4 flex justify-between'>
                        <span className='font-bold text-sm '>$770</span>
                        <span className='font-semibold  line-through  text-sm '>
                           $900
                        </span>
                     </div>
                     <div className='border-t-2 px-4 text-success font-semibold text-sm'>
                        Save - $130
                     </div>
                  </div>
               </div>
               <div className='card w-56 glass cursor-pointer '>
                  <figure className='bg-neutral-content'>
                     <img
                        src='https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png'
                        alt='car!'
                     />
                  </figure>
                  <div className='card-body basis-1/3 p-0 pt-4'>
                     <div className='font-semibold px-4'>Xiaomi X45</div>
                     <div className='px-4 flex justify-between'>
                        <span className='font-bold text-sm '>$770</span>
                        <span className='font-semibold  line-through  text-sm '>
                           $900
                        </span>
                     </div>
                     <div className='border-t-2 px-4 text-success font-semibold text-sm'>
                        Save - $130
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default Home
