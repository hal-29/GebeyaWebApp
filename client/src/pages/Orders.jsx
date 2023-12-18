import { useEffect } from 'react'
import OrderList from '../features/orders/OrderList'

function Orders() {
   useEffect(() => {
      document.title = 'Orders'
   })
   return <OrderList />
}
export default Orders
