import React from 'react'
import ItemList from '../components/ItemList'
import {Center} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const {category} = useParams()
  
  const productos = [
    {id: 1, nombre: "Camiseta Titular AFA", description: "Celeste y blanca a rayas", precio: 25000, stock: 15, category: "cat1" },
    {id: 2, nombre: "Camiseta Suplente AFA", description: "Violeta", stock: 10, precio: 25000, category: "cat1" },
    {id: 3, nombre: "Short Titular Niños", description: "Camiseta titular Niños", precio: 20000, stock: 12, category: "cat1" },
    {id: 4, nombre: "Kit Termo + Mate + Bombilla", description: "Kit Termo + Mate + Bombilla", precio: 10000, stock: 8, category: "cat3"},
    {id: 5, nombre: "Campera Afa", description: "Campera Rompevientos", precio: 38000, stock: 8, category: "cat2"},
    {id: 6, nombre: "Buzo", description: "Buzo", precio: 32000, stock: 8, category: "cat2"},
    {id: 7, nombre: "Ojotas", description: "Ojotas", precio: 12000, stock: 8, category: "cat3"},
    {id: 8, nombre: "Pelota", description: "Pelota", precio: 20000, stock: 8, category: "cat3"},
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