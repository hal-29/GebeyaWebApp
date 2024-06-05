import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
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
            path: '/products',
            element: <Products />,
         },
         {
            path: '/products/:id',
            element: <main className=''>Product item</main>,
         },
         {
            path: '/wishlist',
            element: <main className=''>Wishlist</main>,
         },
         {
            path: '/history',
            element: <main className=''>History</main>,
         },
         {
            path: '/profile',
            element: <main className=''>Profile</main>,
         },
      ],
   },
])

export default router
