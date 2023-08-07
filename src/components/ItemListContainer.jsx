import React from 'react'
import ItemList from '../components/ItemList'
import {Center} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const {category} = useParams()
  
  const productos = [
    {id: 1, nombre: "Camiseta Titular AFA", description: "Celeste y blanca a rayas", stock: 15, category: "cat1" },
    {id: 2, nombre: "Camiseta Suplente AFA", description: "Violeta", stock: 10, category: "cat2" },
    {id: 3, nombre: "Short Titular AFA", description: "Short titular AFA", stock: 12, category: "cat3" },
    {id: 4, nombre: "Campera Afa", description: "Campera Rompevientos", stock: 8, category: "cat3"},
  ]
  
  const getProductos = new Promise((resolve, reject) => {
    if(productos.length >0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    }else{
      reject(new Error("no hay datos"))
    }
  })
  
  
  getProductos
  .then((res)=>{
    console.log(res);
  })
  .catch((error)=>{
    console.log(error);
  }
  )

  
  const filteredProducts = productos.filter((producto) => producto.category === category)
  
  return (
    <Center p="1rem">
       <ItemList
       productos={filteredProducts}
       />
       </Center>
  )
  }

export default ItemListContainer