import { dessertList } from "../data/data"

function ShoppingList() {
    return(
        <ul>
        {dessertList.map(({ image, name, category, price }) =>
          (
            <li>
                <ul>
                    <li>{name}</li>
                    <li>{category}</li>
                    <li>{price}</li>
                </ul>
            </li>
          )
        )}
      </ul>
    )
}

export default ShoppingList