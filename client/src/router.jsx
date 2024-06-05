import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Container from './ui/Container'
import Wishlist from './pages/Wishlist'
import Orders from './pages/Orders'
import Account from './pages/Account'

const router = createBrowserRouter([
   {
      path: '/',
      element: <Container />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/products',
            element: <Products />,
         },
         {
            path: '/products/:id',
            element: <main className=''>Product item</main>,
         },
         {
            path: '/wishlist',
            element: <Wishlist />,
         },
         {
            path: '/orders',
            element: <Orders />,
         },
         {
            path: '/account',
            element: <Account />,
         },
      ],
   },
])

export default router
