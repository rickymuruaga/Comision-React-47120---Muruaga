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
import { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import Loading from './components/Loading'
import SendOrder from './components/SendOrder'



const App = () => {
 /* const [loading, setLoading] = useState(true)
 const [elementos, setElementos] = useState([])

useEffect(() => {
  setTimeout(() => {
    setElementos(["Elemento A", "Elemento B", "Elemento C"])
    setLoading(false)
  }, 5000)
}, [])


if (loading){
  return <Loading/>
}
 */


return (
   <>
    <SendOrder />
    {
    
    /* 
     <h2>Lista de elementos</h2>
    <ul>
      {elementos.map((e) =>
      <li>{e}</li>
      )}
    </ul> */}
    
    

     {/*  <ComponenteA/>
      <Cart/> */}
     
   {  {/* <BrowserRouter>
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
    
</BrowserRouter> */} } 

</>
)
}




export default App

