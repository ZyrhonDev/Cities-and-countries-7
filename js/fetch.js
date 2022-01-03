
export async function getCountries() {
    const response = await fetch("/json/land.JSON");
    const countries = await response.json();
    return countries;
}
export async function getCities() {
    const response = await fetch("/json/stad.JSON");
    const cities = await response.json();
    return cities;
}



