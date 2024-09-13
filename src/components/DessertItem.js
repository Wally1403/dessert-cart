function DessertItem({cover, category, name, price}) {
    return (
        <div>
            <img src={cover} alt="image du gâteau"/>
            <p>{category}</p>
            <h3>{name}</h3>
            <h4>${price}</h4>
        </div>
    );
}

export default DessertItem