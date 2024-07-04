import { PropTypes } from 'prop-types'
import Wrapper from '../ui/Wrapper'

Footer.propTypes = {
   className: PropTypes.string,
}

function Footer({ className }) {
   return (
      <footer className={className}>
         <section className='flex flex-col justify-center items-center gap-4 bg-gray-200/80 py-20'>
            <h1 className='font-semibold text-3xl text-gray-800/90'>
               Subscribe to our newsletter
            </h1>
            <p className='text-gray-800/70'>Get 25% off first purchase</p>
            <div className='flex max-w-screen-md grow'>
               <input
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Your email address'
                  className='px-4 py-2 border border-red-800 focus:outline-none min-w-96 grow'
               />
               <button className='bg-red-800 hover:bg-red-800/80 px-6 text-gray-100 text-xl capitalize transition'>
                  subscribe
               </button>
            </div>
         </section>

         <section className='bg-gray-900/90'>
            <Wrapper className='flex justify-between gap-8 border-gray-700 py-14 border-b text-gray-50'>
               <div className='flex flex-col gap-2 basis-1/3'>
                  <h2 className='text-2xl'>Electronics</h2>
                  <p className='text-gray-50/40 text-sm'>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Error, repellendus qui. Aspernatur necessitatibus, nulla
                     beatae quibusdam voluptates consequatur voluptate incidunt
                     laborum reiciendis magni ratione.
                  </p>
               </div>
               <div className='flex flex-col gap-2 basis-1/3'>
                  <h2 className='text-2xl'>Address</h2>
                  <div className='text-gray-50/40 text-sm'>
                     <span></span>
                     <span>123 Street, Lorem ipsum dolor sit amet. </span>
                  </div>
               </div>
               <div className='flex flex-col gap-2 basis-1/3'>
                  <h2 className='text-2xl'>Contact Us</h2>
                  <div className='text-gray-50/40 text-sm'>
                     <p>
                        <span>Phone</span>
                        <span>+251465213214</span>
                     </p>
                     <p>
                        <span>Email</span>
                        <span>demo@email.com</span>
                     </p>
                  </div>
               </div>
            </Wrapper>
            <Wrapper className='flex justify-between py-14 text-gray-50'>
               <div className='flex flex-col gap-2'>
                  <h1 className='text-lg'>Information</h1>
                  <p className='text-gray-50/40 text-sm'>Contact Us</p>
                  <p className='text-gray-50/40 text-sm'>About Us</p>
                  <p className='text-gray-50/40 text-sm'>Careers</p>
                  <p className='text-gray-50/40 text-sm'>Press</p>
                  <p className='text-gray-50/40 text-sm'>Faq&apos;s</p>
               </div>
               <div className='flex flex-col gap-2'>
                  <h1 className='text-lg'>Company</h1>
                  <p className='text-gray-50/40 text-sm'>Payment Policy</p>
                  <p className='text-gray-50/40 text-sm'>Privacy Policy</p>
                  <p className='text-gray-50/40 text-sm'>Return Policy</p>
                  <p className='text-gray-50/40 text-sm'>Shipping policy</p>
                  <p className='text-gray-50/40 text-sm'>Terms & condition</p>
               </div>
               <div className='flex flex-col gap-2'>
                  <h1 className='text-lg'>Product</h1>
                  <p className='text-gray-50/40 text-sm'>New Products</p>
                  <p className='text-gray-50/40 text-sm'>Featured Products</p>
                  <p className='text-gray-50/40 text-sm'>Best sales</p>
                  <p className='text-gray-50/40 text-sm'>Computer</p>
                  <p className='text-gray-50/40 text-sm'>Sitemap</p>
               </div>
               <div className='flex flex-col gap-2'>
                  <h1 className='text-lg'>My Account</h1>
                  <p className='text-gray-50/40 text-sm'>Account</p>
                  <p className='text-gray-50/40 text-sm'>Wishlist</p>
                  <p className='text-gray-50/40 text-sm'>History</p>
                  <p className='text-gray-50/40 text-sm'>Press</p>
               </div>
            </Wrapper>
         </section>

         <section className='flex justify-center bg-gray-800/90 py-4 text-gray-50'>
            <p className='text-sm'>&copy; 2023 by E-commerce</p>
         </section>
      </footer>
   )
}
export default Footer
