import React, { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/footer/Footer'
import Loginpopup from './components/loginpopup/Loginpopup'
import Verify from './pages/verify/Verify'
import Myorders from './pages/myorders/Myorders'

function App() {
  const[showlogin , setShowlogin] = useState(false)
  return (
    <>
    {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
     
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>

     <Route path = "/" element={<Home/>} />
     <Route path = "/cart" element={<Cart/>} />
     <Route path = "/order" element={<Placeorder/>} />
     <Route path = "/loginpopup" element={<Loginpopup/>} />
     <Route path = "/verify" element={<Verify/>} />
     <Route path = "/myorders" element={<Myorders/>} />
     
     </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App
