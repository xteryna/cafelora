//samostatný soubor pro funkce
export const fetchDrink = async () => {
    const response = await fetch(`https://cafelora-api-1.onrender.com/api/drinks`);
    const json = await response.json();
    return json.data || json
}

export const fetchOrderedDrink = async () => {
    const response = await fetch(`https://cafelora-api-1.onrender.com/api/drinks/filter?ordered=true&select=id,name,image`);
    const json = await response.json();
    return json.data || json;
}
