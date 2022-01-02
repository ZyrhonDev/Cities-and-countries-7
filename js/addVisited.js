// Hämtar "besökt land" knappen med getElementById
const addVisited = document.getElementById ("addVisitedBtn");

const visitedCountries = [];
const selectedCountry = document.getElementById ("countryName");

//Eventlistener på "besökt land" knappen
export function addVisitedCountry() {
    addVisited.addEventListener ("click", function() {
    visitedCountries.push(selectedCountry);
    localStorage.setItem("countryList", JSON.stringify(visitedCountries));
    })
}