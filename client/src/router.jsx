import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
   {
      path: '/cart',
      element: <Cart />,
   },
   {
      path: '/product/:id',
      element: <Product />,
   },
])

export default router
