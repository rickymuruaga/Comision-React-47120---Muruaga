import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import About from './components/About'
import ProductDetail from './components/ProductDetail'
import ShoppingCartContext from "./context/ShoppingCartContext"
import ComponenteA from "./components/ComponenteA"


const App = () => {

return (
   <>
     {/*  <ComponenteA/>
      <Cart/> */}
     
   <BrowserRouter>
   <ShoppingCartContext>
       <Navbar />
    
     <Routes> 
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/cart" element={<Cart />} />
       <Route exact path="/product/:id" element={<ProductDetail/>} />
       <Route exact path="/category/:category" element={<ItemListContainer/>} />
       <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
     
      </Routes>
    
    </ShoppingCartContext>
    
</BrowserRouter> 

</>
)
}

/** */


export default App

