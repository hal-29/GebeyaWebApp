/* eslint-disable react/prop-types */
function OrderItem({ order }) {
   const items = order.products.map(pr => pr.name).join(',')
   const categories = order.products.map(pr => pr.category).join(',')

   const date = new Date(order.createdAt).toLocaleDateString()
   return (
      <tr className='bg-white border-b hover:bg-gray-50'>
         <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
         >
            {items}
         </th>
         <td className='px-6 py-4 text-green-500'>pending</td>
         <td className='px-6 py-4'>{categories}</td>
         <td className='px-6 py-4'>${order.price.toFixed(2)}</td>
         <td className='px-6 py-4 '>{date}</td>
      </tr>
   )
}
export default OrderItem
