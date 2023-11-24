import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Container from './UI/Container'

function App() {
   return (
      <Container>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<div>Not found</div>} />
         </Routes>
      </Container>
   )
}

export default App
