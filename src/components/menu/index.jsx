import { Drink } from '../drink'
import './index.css'

export const Menu = ({drinks}) => {
    // Filtrace nápojů s validní strukturou
    const validDrinks = drinks.filter(
        (drink) =>
        typeof drink.id === 'number' &&
        typeof drink.name === 'string' &&
        typeof drink.ordered === 'boolean' &&
        Array.isArray(drink.layers) &&
        drink.layers.length > 0 &&
        drink.layers.every(
            (layer) =>
            typeof layer.color === 'string' &&
            typeof layer.label === 'string'
        ) &&
        typeof drink.image === 'string'
    );



    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div className="drinks-list">
                    {validDrinks.map((drink) => (
                        <Drink
                            key={drink.id}
                            id={drink.id}
                            name={drink.name}
                            ordered={drink.ordered}
                            image={drink.image}
                            layers={drink.layers}
                        />
                    ))}
                </div>

                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
        </section>
    )
}