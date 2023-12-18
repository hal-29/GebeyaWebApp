import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'))
const Cart = lazy(() => import('./pages/Cart'))
const SignIn = lazy(() => import('./pages/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Navbar = lazy(() => import('./ui/Navbar'))
const Container = lazy(() => import('./ui/Container'))
const Footer = lazy(() => import('./ui/Footer'))
const Product = lazy(() => import('./pages/Product'))
const NotFound = lazy(() => import('./pages/NotFound'))
const SideNav = lazy(() => import('./ui/SideNav'))
const Main = lazy(() => import('./ui/Main'))
const Profile = lazy(() => import('./pages/Profile'))
const Wishlists = lazy(() => import('./pages/Wishlists'))
const Orders = lazy(() => import('./pages/Orders'))
const Update = lazy(() => import('./features/profile/Update'))
const ProductDetails = lazy(() => import('./features/products/ProductDetails'))
const Search = lazy(() => import('./pages/Search'))
const Success = lazy(() => import('./pages/Success'))
import Loading from './ui/Loading'

function App() {
   return (
      <Container>
         <Navbar />
         <SideNav />
         <Suspense fallback={<Loading />}>
            <Main>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/profile' element={<Profile />}>
                     <Route path='update' element={<Update />} />
                  </Route>
                  <Route path='/wishlist' element={<Wishlists />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/product' element={<Product />} />
                  <Route
                     path='/product/:productId'
                     element={<ProductDetails />}
                  />
                  <Route path='/search' element={<Search />} />
                  <Route path='/signin' element={<SignIn />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/success' element={<Success />} />
                  <Route path='*' element={<NotFound />} />
               </Routes>
            </Main>
         </Suspense>
         <Footer />
      </Container>
   )
}

export default App
