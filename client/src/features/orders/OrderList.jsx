import { useSelector, useDispatch } from 'react-redux'
import Redirect from '../../ui/Redirect'
import OrderItem from './OrderItem'
import Loading from '../../ui/Loading'
import { loadOrders } from './orderSlice'
import { useEffect } from 'react'

function OrderList() {
   const account = useSelector(store => store.auth.account)
   const { loading, orders } = useSelector(store => store.order)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(loadOrders())
   }, [dispatch])

   if (!account) return <Redirect />
   if (loading) return <Loading />
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
               {orders.length ? (
                  orders.map(order => (
                     <OrderItem key={order.id} order={order} />
                  ))
               ) : (
                  <tr>
                     <td
                        colSpan='5'
                        className='py-6 text-3xl font-semibold text-center'
                     >
                        there are no orders.
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   )
}

export default OrderList
