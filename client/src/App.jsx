import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './ui/Navbar'
import Container from './ui/Container'
import Footer from './ui/Footer'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import SideNav from './ui/SideNav'
import Main from './ui/Main'
import Profile from './pages/Profile'
import Wishlists from './pages/Wishlists'
import Orders from './pages/Orders'
import Update from './features/profile/Update'
import ProductDetails from './features/products/ProductDetails'
import Search from './pages/Search'
import Success from './pages/Success'

function App() {
   return (
      <Container>
         <Navbar />
         <SideNav />
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
               <Route path='/product/:productId' element={<ProductDetails />} />
               <Route path='/search' element={<Search />} />
               <Route path='/signin' element={<SignIn />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/success' element={<Success />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </Main>
         <Footer />
      </Container>
   )
}

export default App
