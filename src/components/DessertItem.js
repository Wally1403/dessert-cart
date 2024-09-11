function DessertItem({image, category, name, price}) {
    return (
        <div>
            <img alt="lol" src={image} />
            {category}
            {name}
            {price}
        </div>
    );
}

export default DessertItem