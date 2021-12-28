
export async function getContries() {
    const response = await fetch("/json/land.JSON");
    const contries = await response.json();
    return contries;
}
export async function getCitys() {
    const response = await fetch("/json/stad.JSON");
    const citys = await response.json();
    return citys;
}



