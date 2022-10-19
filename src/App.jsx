import React from 'react';
import Header from './components/front/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Add from './components/Pages/Add';
import Signup from './components/Pages/Signup';
import Signin from './components/Pages/Signin';


function App  ()  {

  return (
   
   <div>
    <Router>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='signup' element={<Signup/>}/>
     <Route path='Add' element={<Add/>}/>
     <Route path='Signin' element={<Signin/>}/>
     </Routes>
    </Router>
    </div>
    
  )
}

export default App
