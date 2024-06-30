//samostatný soubor pro funkce
export const fetchDrink = async () => {
    const response = await fetch(`http://localhost:4000/api/drinks`);
    const json = await response.json();
    return json.data
}

export const fetchOrderedDrink = async () => {
    const response = await fetch(`http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image`);
    const json = await response.json();
    return json.data
}