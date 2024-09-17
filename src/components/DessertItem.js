import logoCaddie from "../asset/images/icon-add-to-cart.svg"
import incrementQuantity from "../asset/images/icon-increment-quantity.svg"
import decrementQuantity from "../asset/images/icon-decrement-quantity.svg"

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
            return (
            <div>
                <button className="dc-productList-item-button-addToCart" onClick={() => removeToCart(name, price)}>
                    <img alt="logo-decrement-quantity" src={decrementQuantity}/>
                </button>
                <p>{currentDessertSaved.amount}</p>
                <button className="dc-productList-item-button-addToCart" onClick={() => addAmountToCart(name, price)}>
                    <img alt="logo-decrement-quantity" src={incrementQuantity}/>
                </button>
            </div>
            )
            
        } else {
            return (
                <button className="dc-productList-item-button-addToCart" onClick={() => addToCart(name, price)}>
                    <img alt="logo-caddie" src={logoCaddie}/>
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
            <div className="cd-productList-item-info">
                <p>{category}</p>
                <h3>{name}</h3>
                <h4>${price}</h4>
            </div>
            
        </div>
    );
}

export default DessertItem