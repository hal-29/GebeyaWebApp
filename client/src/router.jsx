import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Container from './ui/Container'

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
            path: '/cart',
            element: <Cart />,
         },
         {
            path: '/product/:id',
            element: <Product />,
         },
      ],
   },
])

export default router
