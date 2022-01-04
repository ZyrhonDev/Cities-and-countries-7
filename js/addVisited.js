
export function addVisitedCity(cities) {
    const addVisited = document.createElement ("button");
    addVisited.textContent = "Besökt"
    addVisited.id = "addVisited"
    addVisited.style.cssText = "position: absolute; top: 1rem; right: 1rem;"; 

    document.body.append(addVisited)
    // Hämta localStorage och OM det redan finns något i den så parsar den och sparas i visitedCities, så vi kan lägga till saker efter det som redan finns.
    
    
   
   function getListFromLS() {
    let getCityList = localStorage.getItem("cityList");

    let visitedCities = [];

    if (getCityList) {
        visitedCities = JSON.parse(getCityList);
    }
    return visitedCities;
   }

   let visitedCities = getListFromLS();

// ########################################################################
// ## LÄGGER TILL STÄDERS ID I LOCALSTORAGE, DUBLETTER KAN DOCK FÖREKOMMA##
// ########################################################################
    addVisited.addEventListener ("click", function() {
        
    let selectedCity = localStorage.getItem("selectedCity");

    for (let p = 0; p < cities.length; p++) {
        if (selectedCity == cities[p].stadname) {
            visitedCities.push(cities[p].id)
            console.log(visitedCities);
            localStorage.setItem("cityList", JSON.stringify(visitedCities));
            
        }
    }
    // visitedCities.push(selectedCity);
    // localStorage.setItem("cityList", JSON.stringify(visitedCities));
    })
}