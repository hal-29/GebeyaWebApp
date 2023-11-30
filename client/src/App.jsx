import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './ui/Navbar'
import Container from './ui/Container'
import Footer from './ui/Footer'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import SideNav from './ui/SideNav'
import About from './features/profile/About'
import Wishlist from './features/profile/Wishlist'
import Orders from './features/profile/Orders'
import Records from './features/profile/Records'
import Update from './features/profile/Update'

function App() {
   return (
      <Container>
         <SideNav />
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />}>
               <Route index element={<About />} />
               <Route path='wishlist' element={<Wishlist />} />
               <Route path='orders' element={<Orders />} />
               <Route path='records' element={<Records />} />
               <Route path='update' element={<Update />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Product />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
         <Footer />
      </Container>
   )
}

export default App
