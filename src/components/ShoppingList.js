import { dessertList } from "../data/data"
import DessertItem from "./DessertItem"
import '../styles/shoppingList.css'

function ShoppingList( {cart, updateCart} ) {

  return(
    <div className="dc-productList">
      <h1>Desserts</h1>
      <div className="dc-productList-list">
        {dessertList.map(({ image, id, name, category, price }) =>
          (
            <div key={id}>
                    <DessertItem 
                      cart={cart}
                      updateCart = {updateCart}
                      cover= {image["desktop"]}
                      category= {category}
                      name= {name}
                      price= {price}
                    />
              
            </div>
          )
        )}
        
      </div>
    </div>
  )
}

export default ShoppingList