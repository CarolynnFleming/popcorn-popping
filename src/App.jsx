import React from 'react';
import Navbar from './Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
//import ItalianiceDetail from './views/ItalianiceDetail';
import ItalianiceList from './views/ItalianiceList';
//import PopcornDetail from './views/PopcornDetail';
import PopcornList from './views/PopcornList';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';

function App() {
  return (
   
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Popcorn" element={<PopcornList/>} />
        <Route path="ItalianIce" element={<ItalianiceList />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Contact" element={<Contact />}/>
      </Routes>
     
          
    </div>
  );
}

export default App;
