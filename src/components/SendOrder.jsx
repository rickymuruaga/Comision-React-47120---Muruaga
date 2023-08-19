import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from "react"



const SendOrder = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [orderId, setOrderId] = useState(null)

const db= getFirestore()


const handleSubmit=(e)=>{
    e.preventDefault()
    addDoc(ordersCollection, order).then(({id}) =>
       setOrderId(id))
    
}
  const order = {
    name,
    email
  }

 const ordersCollection = collection(db, "order")


  return (
    <div>
     <h1>Enviando Ordenes</h1>
     <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="Nombre y Apellido" 
        onChange={(e)=> setName(e.target.value)}
        />
        
        <input type="text" placeholder="Email"
        onChange={(e) => setEmail(e.target.vale)}
        />
        <button type="submit">Enviar info</button>
     </form>
    <p>Numero de orden: {orderId}</p>
    </div>
  )
}

export default SendOrder