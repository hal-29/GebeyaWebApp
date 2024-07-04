import { PropTypes } from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import api from '../api/axios'
import { endpoints } from '../api/endpoints'
import useAuth from '../store/useAuth'

function Orders() {
   const user = useAuth(state => state.user)

   const query = useQuery({
      queryKey: ['orders'],
      queryFn: async () => {
         const res = await api.get(endpoints.getAllOrders())
         return res.data
      },
      enabled: !!user,
   })

   if (!user)
      return (
         <main className='flex justify-center items-center py-6 min-h-80'>
            <h1 className='text-2xl text-center'>
               Please login to view your orders
            </h1>
         </main>
      )

   return (
      <main className='p-4 min-h-[70svh] max-h-[90svh] overflow-y-auto'>
         <div className='flex flex-col'>
            <div className='-m-1.5 overflow-x-auto'>
               <div className='inline-block p-1.5 min-w-full align-middle'>
                  <div className='overflow-hidden'>
                     <table className='divide-y divide-gray-200 min-w-full'>
                        <Headers />
                        <tbody className='divide-y divide-gray-200'>
                           {query.data?.map(order => (
                              <OrderRow key={order.id} order={order} />
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Orders

OrderRow.propTypes = {
   order: PropTypes.shape({
      id: PropTypes.string,
      products: PropTypes.string,
      createdAt: PropTypes.string,
      address: PropTypes.string,
      total: PropTypes.number,
      status: PropTypes.string,
   }).isRequired,
}

function OrderRow({ order }) {
   return (
      <tr>
         <td className='px-6 py-4 font-medium text-gray-800 text-sm whitespace-nowrap'>
            {order.id}
         </td>
         <td className='px-6 py-4 max-w-32 lg:max-w-64 text-gray-800 text-sm truncate whitespace-nowrap overflow-hidden'>
            {order.products}
         </td>
         <td className='px-6 py-4 text-gray-800 text-sm whitespace-nowrap'>
            {new Date(order.createdAt).toLocaleTimeString('en-US', {
               month: 'short',
               day: '2-digit',
               hour: '2-digit',
               minute: '2-digit',
            })}
         </td>
         <td className='px-6 py-4 text-gray-800 text-sm whitespace-nowrap'>
            {order.address}
         </td>
         <td className='px-6 py-4 text-gray-800 text-sm whitespace-nowrap'>
            ${order.total}
         </td>
         <td
            className={`px-6 py-4 font-medium text-end text-sm whitespace-nowrap ${
               order.status === 'completed' ? 'text-green-500' : 'text-blue-500'
            }`}
         >
            {order.status}
         </td>
      </tr>
   )
}

function Headers() {
   return (
      <thead>
         <tr>
            <th
               scope='col'
               className='px-6 py-3 font-medium text-gray-500 text-start text-xs uppercase'
            >
               Order ID
            </th>
            <th
               scope='col'
               className='px-6 py-3 font-medium text-gray-500 text-start text-xs uppercase'
            >
               Products
            </th>
            <th
               scope='col'
               className='px-6 py-3 font-medium text-gray-500 text-start text-xs uppercase'
            >
               Date Ordered
            </th>
            <th
               scope='col'
               className='px-6 py-3 font-medium text-gray-500 text-start text-xs uppercase'
            >
               Address
            </th>
            <th
               scope='col'
               className='px-6 py-3 font-medium text-gray-500 text-start text-xs uppercase'
            >
               Total
            </th>
            <th
               scope='col'
               className='px-6 py-3 font-medium text-end text-gray-500 text-xs uppercase'
            >
               Status
            </th>
         </tr>
      </thead>
   )
}
