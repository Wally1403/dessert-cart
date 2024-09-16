function DessertItem({cart, updateCart, cover, category, name, price}){

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
            return (
                <button className="dc-productList-item-button-addToCart" onClick={() => addToCart(name, price)}>
                    <img alt="logo-caddie" src="d"/>
                    <p>Add to Cart</p>
                </button>
            )
        }
    }

    return (
        <div className="dc-productList-item">
            <div className="dc-productList-item-image-and-button">
                <img src={cover} alt="image du gâteau"/>
                {buttonToAdd(name, price)}
            </div>
            <p>{category}</p>
            <h3>{name}</h3>
            <h4>${price}</h4>
        </div>
    );
}

export default DessertItem