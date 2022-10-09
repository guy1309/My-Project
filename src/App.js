import React from 'react'
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';

const App = () => {
 const {productItems} = data;
 
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="Cart" element={<Cart/>}/>
        </Routes>
      </Router>
      
    
    </div>
  )
}

export default App