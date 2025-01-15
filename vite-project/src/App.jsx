import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Route, Routes, } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;