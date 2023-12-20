import { Link } from 'react-router-dom'

function Ads() {
   return (
      <section className='p-2  max-w-6xl mx-auto'>
         <div className='flex justify-between border-b-2 py-3'>
            <h2 className='prose text-3xl border-primary'>
               Top
               <span className='text-primary'> Electronic companies</span>
            </h2>
            {/* <div className='btn btn-sm btn-ghost rounded-full'>
               View All
               <span className='fa-angle-right fa-solid'></span>
            </div> */}
         </div>
         <div className='flex py-4 gap-4'>
            <Link
               to='search?q=apple'
               className='h-48 bg-primary/40 grow rounded-lg overflow-hidden basis-1/3 '
            >
               <img
                  src='https://images.macrumors.com/t/-WhF9d3h7Je2kQsIQjH4OMFVSNs=/1600x/article-new/2022/09/iphone-14-pro.jpg'
                  alt='apple'
                  className='w-full h-full object-cover object-top'
               />
            </Link>
            <Link
               to='search?q=samsung'
               className='h-48 bg-primary/40 grow rounded-lg overflow-hidden basis-1/3'
            >
               <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxft8g7WcR3dare5TiF7ExlMZDx1j9LnP3qQ&usqp=CAU'
                  alt='samsung'
                  className="'w-full h-full object-cover object-top'"
               />
            </Link>
            <Link
               to='search?q=google'
               className='h-48 bg-primary/40 grow rounded-lg overflow-hidden basis-1/3'
            >
               <img
                  src='https://i.ytimg.com/vi/otomCbnwsv0/maxresdefault.jpg'
                  alt='google pixel'
                  className='w-full h-full object-cover object-top'
               />
            </Link>
         </div>
      </section>
   )
}
export default Ads
