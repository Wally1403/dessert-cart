import { useEffect, useState } from "react"
import OrderConfirmed from "./OrderConfirmed";
import logoNeutralTree from "../asset/images/icon-carbon-neutral.svg"
import emptyIllustration from "../asset/images/illustration-empty-cart.svg"

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
			return (<button className="dc-cart-added-item-button-remove" onClick={() => removeCart(name, price)}>Supprimer</button>)
		}
	}
    return (
        <div>
            {cart.length > 0 ? (
                <div className="dc-cart-fill">

                    <h2>Your cart ({itemNumber})</h2>

                    <ul className="dc-cart-added-items">
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`} className="dc-cart-added-item">
                                <div className="dc-cart-added-item-info">
                                    <p>{name}</p>
                                    <div className="quantity-and-price">
                                      <p>{amount}x</p>
                                      <p>@{price.toFixed(2)}</p>
                                      <p>${(price*amount).toFixed(2)}</p>
                                    </div>
                                </div>
                                {isDeleting(name, price)}
                            </div>
                        ))}
                    </ul>

                    <div className="dc-cart-orderTotal">
                        <p>Order Total</p>
                        <h3>{total}€</h3>
                    </div>

                    <div className="dc-cart-carbon-neutral">
                        <div className="dc-cart-carbon-neutral-info">
                            <img alt="logo-neutral-tree" src={logoNeutralTree}/>
                            <p>This a neutral <b>carbon-neutral</b> delivery</p>
                        </div>
                    </div>

                    <button className="dc-cart-button-confirm" onClick={() => setOrderConfirmed(true)}>
                        <p>Confirm Order</p>
                    </button>
                </div>
            ) : (
                <div className="dc-cart-empty">
                    <h2>Your Cart(0)</h2>

                    <div className="dc-cart-empty-placeholder">
                        <img alt="empty-illustration" src={emptyIllustration}/>
                        <p>Your added items will appear here</p>
                    </div>
                </div>
            )}
            {orderIsConfirmed ? 
            <OrderConfirmed cart={cart} updateCart={updateCart} orderIsConfirmed={orderIsConfirmed}  setOrderConfirmed={setOrderConfirmed}/> : console.log('')}
        </div>
            
       
    )
}

export default Cart