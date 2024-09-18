import logoCaddie from "../asset/images/icon-add-to-cart.svg"
import incrementQuantity from "../asset/images/icon-increment-quantity.svg"
import decrementQuantity from "../asset/images/icon-decrement-quantity.svg"
import '../styles/dessertItem.css'

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
            <button className="dc-productList-item-button-addToCart-quantity">
                <img onClick={() => removeToCart(name, price)} alt="logo-decrement-quantity" src={decrementQuantity}/>
                <p>{currentDessertSaved.amount}</p>
                <img onClick={() => addAmountToCart(name, price)} alt="logo-decrement-quantity" src={incrementQuantity}/>
            </button>
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
            <div className="dc-productList-item-info">
                <p>{category}</p>
                <h3 className="item-name">{name}</h3>
                <h3 className="item-price">${price}</h3>
            </div>
            
        </div>
    );
}

export default DessertItem