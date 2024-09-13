import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import { useState } from "react";

function App() {

  const [cart, updateCart] = useState([])

  return (
    <div>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Cart cart={cart} updateCart={updateCart}/>
    </div>
  )
}

export default App;
