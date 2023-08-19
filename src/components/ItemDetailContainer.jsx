import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'
 

 const ItemDetailContainer = () => {
       
  const productos = [
    {id: 1, nombre: "Camiseta Titular AFA", description: "Celeste y blanca a rayas", stock: 15, category: "cat1" },
    {id: 2, nombre: "Camiseta Suplente AFA", description: "Violeta", stock: 10, category: "cat1" },
    {id: 3, nombre: "Short Titular Niños", description: "Camiseta titular Niños", stock: 12, category: "cat1" },
    {id: 4, nombre: "Kit Termo + Mate + Bombilla", description: "Kit Termo + Mate + Bombilla", stock: 8, category: "cat3"},
    {id: 5, nombre: "Campera Afa", description: "Campera Rompevientos", stock: 8, category: "cat2"},
    {id: 6, nombre: "Buzo", description: "Buzo", stock: 8, category: "cat2"},
    {id: 7, nombre: "Ojotas", description: "Ojotas", stock: 8, category: "cat3"},
    {id: 8, nombre: "Pelota", description: "Pelota", stock: 8, category: "cat3"},
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
      
const Document = () => {
  const [product, setProduct] = useState([])
  console.log(product);

 useEffect(() => {
  const db = getFirestore()
  const oneItem = doc(db, "indumentaria", "AIciaOdNZJzJkLPcwKqY")
  getDoc(oneItem).then((snapshot) => {
    if(snapshot.exists()){
      const docs = snapshot.data()
      setProduct(docs)
     }
    }, [])

 })




}
  return (
    <div>
    {/* <ItemDetail
     productos={productos}
    /> */}
    
      <h1>Producto</h1>
      {
        <div>
            <h3>producto: {product.name}</h3>
            <h4>categoria: {product.category}</h4>
            <p>Precio: {product.price}</p>
        </div>

      }
    
    
    
    
    </div>
  )
}

export default ItemDetailContainer