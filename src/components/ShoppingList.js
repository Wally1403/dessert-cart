import { dessertList } from "../data/data"
import DessertItem from "./DessertItem"

function ShoppingList( {cart, updateCart} ) {

  

  return(
    <div>
      <h1>Desserts</h1>
      <div className="dc-productList">
        {dessertList.map(({ cover, id, name, category, price }) =>
          (
            <div key={id} className="dc-productList-row">
                    <DessertItem 
                      cart={cart}
                      updateCart = {updateCart}
                      cover= {cover}
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