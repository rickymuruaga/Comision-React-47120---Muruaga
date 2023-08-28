import { useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"

const {cart, setCart, comision, longitud}=
useContext(CartContext)

const Cart = () => {
  return (
    <div>
      <h1>{comision}</h1>
      <p>{cart}</p>
      <button onClick={() =>setCart
      ("nuevo valor")}>Cambiar Valor</button>
      <p>{longitud}</p>
     </div>
  )
}

export default Cart