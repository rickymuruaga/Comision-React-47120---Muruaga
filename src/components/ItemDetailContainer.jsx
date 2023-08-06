import React from 'react'
import ItemDetail from './ItemDetail'


 const ItemDetailContainer = () => {
       
        const productos = [
          {id: 1, nombre: "producto A", description: "camiseta titular afa", stock: 15, category: "cat1" },
          {id: 2, nombre: "producto B", description: "camiseta suplente afa", stock: 10, category: "cat2" },
          {id: 3, nombre: "producto C", description: "short titular afa", stock: 12, category: "cat3" },
          {id: 4, nombre: "producto D", description: "campera afa", stock: 8, category: "cat3" },
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