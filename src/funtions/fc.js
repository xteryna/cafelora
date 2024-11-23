//samostatný soubor pro funkce
export const fetchDrink = async () => {
    const response = await fetch(`https://cafelora-api-1.onrender.com/api/drinks`);
    const json = await response.json();
    return json.data || json
}

export const fetchOrderedDrink = async () => {
    const response = await fetch(`https://cafelora-api-1.onrender.com/api/drinks`);
    const drinks = await response.json();
    const orderedDrinks = (drinks.data || drinks).filter((drink) => drink.ordered === true);
    return orderedDrinks;
}
