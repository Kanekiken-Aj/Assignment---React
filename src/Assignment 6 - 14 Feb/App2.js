import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';



const App2 = () => {
  
    return (
        <BrowserRouter>
          <div className='Navbar' >
             <Link to="/" >Home</Link>
             <Link to="/about" style={{paddingLeft:'10px'}}>About</Link>
             <Link to="/products" style={{paddingLeft:'10px'}}>Products</Link>
             <Link to="/contact" style={{paddingLeft:'10px'}}>Contact</Link>
    
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
  
}

export default App2