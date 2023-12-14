import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import { removeWishlist } from './wishlistSlice'

/* eslint-disable react/prop-types */
function WishlistRow({ product, index }) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   return (
      <tr
         onClick={() => navigate(`/product/${product.id}`)}
         className='bg-white border-b hover:bg-gray-50 '
      >
         <td className='w-4 p-4'>{index + 1}</td>
         <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
         >
            {product.name}
         </th>
         <td className='px-6 py-4'>
            {`${product?.category[0].toUpperCase()}${product.category.slice(
               1
            )}`}
         </td>
         <td className='px-6 py-4'>${product.price.toFixed(2)}</td>
         <td className=''>
            <Button
               label='Remove'
               secondary={true}
               onClick={e => {
                  e.stopPropagation()
                  dispatch(removeWishlist(product))
               }}
            />
         </td>
      </tr>
   )
}
export default WishlistRow
