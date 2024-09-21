import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import OrderConfirmed from "./OrderConfirmed";
import { useEffect, useState } from "react";
import "../styles/app.css"

function App() {

  const savedCart = localStorage.getItem('cart')
  const [orderIsConfirmed, setOrderConfirmed] = useState(false)

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]
  )

  return (
    <div>
        <div className="dc-main-content">
          <ShoppingList cart={cart} updateCart={updateCart}/>
          <Cart cart={cart} updateCart={updateCart} orderIsConfirmed={orderIsConfirmed}  setOrderConfirmed={setOrderConfirmed} />
        </div>
        {orderIsConfirmed ? 
          <div className="dc-modal">
            <OrderConfirmed cart={cart} updateCart={updateCart} orderIsConfirmed={orderIsConfirmed}  setOrderConfirmed={setOrderConfirmed}/>
          </div> : console.log('')
        }
    </div>
      
  )
}

export default App;
