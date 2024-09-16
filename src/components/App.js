import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import { useEffect, useState } from "react";

function App() {



  const savedCart = localStorage.getItem('cart')

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]
  )

  return (
    <div>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Cart cart={cart} updateCart={updateCart}/>
    </div>
  )
}

export default App;
