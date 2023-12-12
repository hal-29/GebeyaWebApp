import { useNavigate } from 'react-router-dom'

/* eslint-disable react/prop-types */
function WishlistRow({ product, index }) {
   const navigate = useNavigate()
   return (
      <tr
         onClick={() => navigate(`/product/${product.id}`)}
         className='bg-white border-b hover:bg-gray-50 cursor-pointer'
      >
         <td className='w-4 p-4'>{index + 1}</td>
         <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
         >
            {product.name}
         </th>
         <td className='px-6 py-4'>{`${product.category[0].toUpperCase()}${product.category.slice(
            1
         )}`}</td>
         <td className='px-6 py-4'>${product.price.toFixed(2)}</td>
         <td className='px-6 py-4'>remove</td>
      </tr>
   )
}
export default WishlistRow
