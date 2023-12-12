import { useSelector } from 'react-redux'
import Redirect from '../../ui/Redirect'
import WishlistRow from './WishlistRow'

function Wishlist() {
   const account = useSelector(store => store.auth.account)
   const wishlists = useSelector(store => store.wishlist.wishlists)

   if (!account) return <Redirect />
   return (
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
         <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
               <tr>
                  <th scope='col' className='p-4'>
                     No
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Product name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>
               {wishlists.length ? (
                  wishlists.map((list, index) => (
                     <WishlistRow key={list.id} index={index} product={list} />
                  ))
               ) : (
                  <tr>
                     <td
                        colSpan='4'
                        className='py-6 text-3xl font-semibold text-center'
                     >
                        there are no wishlists.
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   )
}

export default Wishlist
