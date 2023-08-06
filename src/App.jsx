import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import About from './components/About'
import ItemDetail from './components/ItemDetail'
import ProductDetail from './components/ProductDetail'








const App = () => {

return (
    <BrowserRouter>
      <Navbar />
      <ProductDetail/>
      <ItemDetail/>
    
     <Routes> 
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/cart" element={<Cart />} />
       <Route exact path="/product/:id" element={<ProductDetail/>} />
       <Route exact path="/category/:category" element={<ItemListContainer/>} />
       <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
     
          
       
        
    
    </Routes>
    
    
    </BrowserRouter>
   
  )
}

export default App

