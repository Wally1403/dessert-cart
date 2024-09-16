import { dessertList } from "../data/data"

function OrderConfirmed({cart, updateCart, setOrderConfirmed}) {

    const total = cart.reduce(
        (acc, dessert) => acc + dessert.amount * dessert.price,
        0
    ).toFixed(2)

    function findCover(name) {
        const currentDessertCover = dessertList.find((dessert) => dessert.name === name)
        console.log(name)
        return currentDessertCover.cover
    }

    function orderIsFinished() {
        setOrderConfirmed(false)
        updateCart([])
    }

    return(
        <div>
            <img alt="bouton de validation"/>
            <h1>Order Confirmed</h1>
            <p>We hope you ennjoy your food</p>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    <img alt="photo du gâteau" src={findCover(name)}/>
                    <p>{name}</p>
                    <p>{amount}x</p>
                    <p>@{price.toFixed(2)}</p>
                    <p>${(price*amount).toFixed(2)}</p>
                </div>
            ))}
            <div>
                <p>Order Total</p>
                <h2>${total}</h2>
            </div>
            <button onClick={() => orderIsFinished()}>Start New Order</button>
        </div>
    )
}

export default OrderConfirmed