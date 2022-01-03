// Hämtar "besökt land" knappen med getElementById
const addVisited = document.getElementById ("addVisitedBtn");

const visitedCities = [];
const selectedCity = document.getElementById ("countryName");

//Eventlistener på "besökt land" knappen
export function addVisitedCity() {
    addVisited.addEventListener ("click", function() {
    let getCityList = localStorage.getItem("cityList");

    if(getCityList) {
        visitedCities = JSON.parse(getCityList);
    }

    visitedCountries.push(selectedCity);
    localStorage.setItem("cityList", JSON.stringify(visitedCities));
    })
}