import { dessertList } from "../data/data"
import DessertItem from "./DessertItem"

function ShoppingList() {
    return(
      <div>
          {dessertList.map(({ cover, id, name, category, price }) =>
            (
              <div key={id}>
                      <DessertItem 
                        cover= {cover}
                        category= {category}
                        name= {name}
                        price= {price}
                      />
              </div>
            )
          )}
      </div>
    )
}

export default ShoppingList