// Hämtar "besökt land" knappen med getElementById
export function addVisitedCity() {
    const addVisited = document.createElement ("button");
    addVisited.textContent = "Lägg till"
    addVisited.id = "addVisited"
    addVisited.style.cssText = "position: absolute; top: 1rem; right: 1rem;"; 

    const visitedCities = [];
    const selectedCity = document.getElementById ("countryName");

    body.document.append(addVisited)
//Eventlistener på "besökt land" knappen
    addVisited.addEventListener ("click", function() {
    let getCityList = localStorage.getItem("cityList");

    if(getCityList) {
        visitedCities = JSON.parse(getCityList);
    }

    visitedCities.push(selectedCity);
    localStorage.setItem("cityList", JSON.stringify(visitedCities));
    })
}