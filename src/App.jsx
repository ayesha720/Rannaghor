import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginSignUp from './Pages/LoginSignUp';

const App = () => {
  return (
    <>
      <div className='app'>
     <Navbar/>
      
    <HashRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
          </Routes>
        </HashRouter>
    </div>
    
    <Footer/>
    </>
  
  )
}

export default App
