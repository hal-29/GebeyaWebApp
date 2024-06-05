import { PropTypes } from 'prop-types'
const orderData = [
   {
      id: 1,
      products: 'Product Directives Officer',
      date: 'Jan 21, 2021',
      address: 'Sidney No. 1 Lake Park',
      total: 255,
      status: 'Pending',
   },
   {
      id: 2,
      products: 'Product Manager',
      date: 'Feb 10, 2021',
      address: 'New York No. 1 Lake Park',
      total: 150,
      status: 'Arrived',
   },
   {
      id: 3,
      products: 'Product Designer',
      date: 'Mar 5, 2021',
      address: 'London No. 1 Lake Park',
      total: 300,
      status: 'Pending',
   },
   {
      id: 4,
      products: 'Product Developer',
      date: 'Apr 15, 2021',
      address: 'Paris No. 1 Lake Park',
      total: 200,
      status: 'Arrived',
   },
   {
      id: 5,
      products: 'Product Analyst',
      date: 'May 20, 2021',
      address: 'Tokyo No. 1 Lake Park',
      total: 180,
      status: 'Pending',
   },
   {
      id: 6,
      products: 'Product Tester',
      date: 'Jun 30, 2021',
      address: 'Berlin No. 1 Lake Park',
      total: 250,
      status: 'Arrived',
   },
]

function Orders() {
   return (
      <main className='p-4 min-h-[70svh]'>
         <div className='flex flex-col'>
            <div className='-m-1.5 overflow-x-auto'>
               <div className='inline-block p-1.5 min-w-full align-middle'>
                  <div className='overflow-hidden'>
                     <table className='divide-y divide-gray-200 min-w-full'>
                        <Headers />
                        <tbody className='divide-y divide-gray-200'>
                           {orderData.map(order => (
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
      id: PropTypes.number,
      products: PropTypes.string,
      date: PropTypes.string,
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
         <td className='px-6 py-4 text-gray-800 text-sm whitespace-nowrap'>
            {order.products}
         </td>
         <td className='px-6 py-4 text-gray-800 text-sm whitespace-nowrap'>
            {order.date}
         </td>
         <td className='px-6 py-4 text-gray-800 text-sm whitespace-nowrap'>
            {order.address}
         </td>
         <td className='px-6 py-4 text-gray-800 text-sm whitespace-nowrap'>
            ${order.total}
         </td>
         <td className='px-6 py-4 font-medium text-end text-sm whitespace-nowrap'>
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
