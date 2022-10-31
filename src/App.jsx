import React from "react";
import './App.css'
import Header from "./components/front/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Add from "./components/Pages/Tasklist/Add";
import Signup from "./components/Pages/Signup/Signup";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Signup/Contact";
import Footer from "./components/front/Footer";



function App() {
  return (
    
      
         <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="Add" element={<Add />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
