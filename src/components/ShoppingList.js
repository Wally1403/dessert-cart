import { dessertList } from "../data/data"
import DessertItem from "./DessertItem"
import { useState } from "react"

function ShoppingList( {cart, updateCart} ) {

  function addAmountToCart(name, price) {

    const currentDessertSaved = cart.find((dessert) => dessert.name === name)

    const cartFilteredCurrentDessert = cart.filter(
      (dessert) => dessert.name !== name
    )
    updateCart([
      ...cartFilteredCurrentDessert,
      {name, price, amount: currentDessertSaved.amount + 1}]
    )
  } 
  function addToCart(name, price) {
      updateCart([...cart, {name, price, amount: 1}])
  }
  function removeToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			if (currentPlantSaved.amount === 1) {
				updateCart(
					cartFilteredCurrentPlant
				)
			} else {
				updateCart([
					...cartFilteredCurrentPlant,
					{ name, price, amount: currentPlantSaved.amount - 1 }
				])
			}
		}
}

  function buttonToAdd(name, price) {
    const currentDessertSaved = cart.find((dessert) => dessert.name === name)

    if(currentDessertSaved) {
      return (<div>
        <button onClick={() => removeToCart(name, price)}>-</button>
        {currentDessertSaved.amount}
        <button onClick={() => addAmountToCart(name, price)}>+</button>
      </div>)
      
    } else {
      return <button onClick={() => addToCart(name, price)}>Add to Cart</button>
    }
  }

  return(
    <div>
      <h1>Desserts</h1>
        {dessertList.map(({ cover, id, name, category, price }) =>
          (
            <div key={id}>
                    <DessertItem 
                      cover= {cover}
                      category= {category}
                      name= {name}
                      price= {price.toFixed(2)}
                    />
                    {buttonToAdd(name, price)}
            </div>
          )
        )}
    </div>
  )
}

export default ShoppingList