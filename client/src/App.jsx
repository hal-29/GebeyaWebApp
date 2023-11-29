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

function App() {
   return (
      <Container>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/item/:id' element={<Product />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound/>} />
         </Routes>
         <Footer />
      </Container>
   )
}

export default App
