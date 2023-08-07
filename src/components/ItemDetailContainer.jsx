import React from 'react'
import ItemDetail from './ItemDetail'


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
      

  return (
    <>
    <ItemDetail
     productos={productos}
     />
    </>
  )
}

export default ItemDetailContainer