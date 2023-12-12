import { useSelector } from 'react-redux'
import Redirect from '../../ui/Redirect'

function OrderList() {
   const account = useSelector(store => store.auth.account)

   if (!account) return <Redirect />
   return (
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
         <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
               <tr>
                  <th scope='col' className='px-6 py-3'>
                     Product name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Status
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     Shipping
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr className='bg-white border-b hover:bg-gray-50'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                     Apple MacBook Pro 17"
                  </th>
                  <td className='px-6 py-4 text-green-500'>pending</td>
                  <td className='px-6 py-4'>Laptop</td>
                  <td className='px-6 py-4'>$2999</td>
                  <td className='px-6 py-4 '>124 Road, NY</td>
               </tr>
               <tr className='bg-white border-b hover:bg-gray-50'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                     Microsoft Surface Pro
                  </th>
                  <td className='px-6 py-4 text-green-500'>pending</td>
                  <td className='px-6 py-4'>Laptop PC</td>
                  <td className='px-6 py-4'>$1999</td>
                  <td className='px-6 py-4 '>124 Road, NY</td>
               </tr>
               <tr className='bg-white hover:bg-gray-50'>
                  <th
                     scope='row'
                     className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                     Magic Mouse 2
                  </th>
                  <td className='px-6 py-4 text-green-500'>pending</td>
                  <td className='px-6 py-4'>Accessories</td>
                  <td className='px-6 py-4'>$99</td>
                  <td className='px-6 py-4 '>124 Road, NY</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default OrderList