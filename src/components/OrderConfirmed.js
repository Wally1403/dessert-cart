import { dessertList } from "../data/data"
import logoCheck from "../asset/images/icon-order-confirmed.svg"
import '../styles/orderConfirmed.css'

function OrderConfirmed({cart, updateCart, setOrderConfirmed}) {

    const total = cart.reduce(
        (acc, dessert) => acc + dessert.amount * dessert.price,
        0
    ).toFixed(2)

    function findCover(name) {
        const currentDessertCover = dessertList.find((dessert) => dessert.name === name)
        return (currentDessertCover.image['thumbnail'])
    }

    function orderIsFinished() {
        setOrderConfirmed(false)
        updateCart([])
    }

    return(
        <div className="dc-modal">

            <div className="dc-modal-title-info">
                <img alt="bouton de validation" src={logoCheck}/>
                <div className="dc-modal-title-info-texts">
                    <h1>Order Confirmed</h1>
                    <p>We hope you enjoy your food</p>
                </div>
            </div>

            <div className="dc-modal-confirmedItem">
                {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`} className="dc-modal-confirmedItem-items">
                        <div className="dc-modal-confirmedItem-items-confirmItem">
                            <div className="dc-modal-confirmedItem-items-confirmItem-item">
                                <img alt="photo du gâteau" src={findCover(name)}/>

                                <div className="dc-modal-confirmedItem-items-confirmItem-item-frame">
                                    <p>{name}</p>
                                    <div className="dc-modal-confirmedItem-items-confirmItem-item-frame-amount">
                                        <p>{amount}x</p>
                                        <p>@{price.toFixed(2)}</p>
                                    </div> 
                                </div>

                            </div>
                            <p>${(price*amount).toFixed(2)}</p>
                        </div>
                    </div>
                ))}

                <div className="dc-modal-confirmed-item-total">
                    <p>Order Total</p>
                    <h2>${total}</h2>
                </div>

            </div>

            <button className="dc-modal-button" onClick={() => orderIsFinished()}>Start New Order</button>
            
        </div>
    )
}

export default OrderConfirmed