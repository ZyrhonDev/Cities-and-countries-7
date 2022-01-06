
export function addVisitedCity(cities) {
    const addVisited = document.createElement ("button");
    addVisited.textContent = "Besökt"
    addVisited.id = "addVisited"
    addVisited.style.cssText = "position: absolute; top: 1rem; right: 1rem;"; 

    document.body.append(addVisited)
    // Hämta localStorage och OM det redan finns något i den så parsar den och sparas i visitedCities, så vi kan lägga till saker efter det som redan finns.
    
    
   function getListFromLS() {
    let visitedCities = JSON.parse(localStorage.getItem("cityList"))

        if (visitedCities == null) {
            visitedCities = [];
        } 
        return visitedCities;
    }

    let visitedCities = getListFromLS()

// ########################################################################
// ## LÄGGER TILL STÄDERS ID I LOCALSTORAGE, DUBLETTER KAN DOCK FÖREKOMMA##
// ########################################################################
    addVisited.addEventListener ("click", function() {
    let selectedCity = localStorage.getItem("selectedCity");

    cities.find((city) => {
        if(selectedCity == city.stadname){
            let cityToPush = city.id

            let cityExist = visitedCities.find(visitedCity => visitedCity == cityToPush)

            if(!cityExist){
                visitedCities.push(cityToPush)
                localStorage.setItem("cityList", JSON.stringify(visitedCities))
            }
        }
    })

    // visitedCities.push(selectedCity);
    // localStorage.setItem("cityList", JSON.stringify(visitedCities));
    })
}