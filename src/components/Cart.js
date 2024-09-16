import { useEffect, useState } from "react"
import OrderConfirmed from "./OrderConfirmed";

function Cart({cart, updateCart}) { 

    const [orderIsConfirmed, setOrderConfirmed] = useState(false)

    const total = cart.reduce(
        (acc, dessert) => acc + dessert.amount * dessert.price,
        0
    ).toFixed(2)

    useEffect(() => {
        document.title = `Panier : ${total}$`;
      }, [total]);
      

    const itemNumber = cart.reduce(
        (acc, dessert) => acc + dessert.amount,
        0
    )

    function removeCart(name, price) {
        const currentDessertSaved = cart.find((dessert) => dessert.name === name)
        if (currentDessertSaved) {
          const cartFilteredCurrentPlant = cart.filter(
            (dessert) => dessert.name !== name
          )
          if (currentDessertSaved.amount === 1) {
            updateCart(
              cartFilteredCurrentPlant
            )
          } else {
            updateCart([
              ...cartFilteredCurrentPlant
            ])
          }
        }
    }

    function isDeleting(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			return (<button onClick={() => removeCart(name, price)}>Supprimer</button>)
		}
	}
    return (
        <div>
            {cart.length > 0 ? (
                <div>
                    <h2>Your cart ({itemNumber})</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                <p>{name}</p>
                                <div>
                                    <p>{amount}x</p>
                                    <p>@{price.toFixed(2)}</p>
                                    <p>${(price*amount).toFixed(2)}</p>
                                    {isDeleting(name, price)}
                                </div>
                            </div>
                        ))}
                    </ul>
                    <div>
                        <p>Order Total</p>
                        <h3>{total}€</h3>
                    </div>
                    <button onClick={() => setOrderConfirmed(true)}>Confirm Order</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
            {orderIsConfirmed ? 
            <OrderConfirmed cart={cart} updateCart={updateCart} orderIsConfirmed={orderIsConfirmed}  setOrderConfirmed={setOrderConfirmed}/> : console.log('')}
        </div>
            
       
    )
}

export default Cart