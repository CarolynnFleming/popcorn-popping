import React from 'react';
import Navbar from './Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
//import ItalianiceDetail from './views/ItalianiceDetail';
import ItalianiceList from './views/ItalianiceList';
//import PopcornDetail from './views/PopcornDetail';
import Popcorn from './views/Popcorn';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import './App.css'
import Bags  from './views/Bags';

function App() {
  return (
   
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Popcorn" element={<Popcorn/>} />
        <Route path="ItalianIce" element={<ItalianiceList />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Contact" element={<Contact />}/>
        <Route path="Bags" element={<Bags/>}/>
      </Routes>
     
          
    </div>
  );
}

export default App;
