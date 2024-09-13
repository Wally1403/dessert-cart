function DessertItem({cover, category, name, price}) {
    return (
        <div>
            <img src={cover} alt="image du gâteau"/>
            <p>{category}</p>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button>Ajouter au panier</button>
        </div>
    );
}

export default DessertItem