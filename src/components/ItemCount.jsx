import { useContext, useState } from "react";
import {CartContext} from "../context/ShoppingCartContext";




const ItemCount = ({ stock, id, price, name}) => {

const [cart, setCart] = useContext(CartContext);
const [count, setCount] = useState(1)

const sumar = () => {
    setCount(count + 1);
}

const restar = () => {
    setCount(count - 1);
};


const addToCart = () => {
    setCart((currItems) => {
       const isItemFound = currItems.find((item) => item.id === id);
       if(isItemFound) {
        return currItems.map((item) => {
            if(item.id === id) {
             return{...item, quantity: itemQuantity + count};
            } else {
                return item;
            }
        });
       } else {
        return [...currItems, {id, quantity: count, price, name}];
       }
        
       });
    }
    
return (
    <div>ItemCount</div>
  )
}

export default ItemCount