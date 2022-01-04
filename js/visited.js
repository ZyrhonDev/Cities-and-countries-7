/*
Tar alla städers ID ifrån localStorage och visar städernas namn samt alla invånarantal ihopräknat. 
*/

// Hämtar "besökta länder" knappen med getElementById samt main på samma sätt.
const populationContainer = document.getElementById ("populationContainer");
const weatherContainer = document.getElementById ("weatherContainer");
const infoContainer = document.getElementById ("infoContainer");
const picContainer = document.getElementById ("picContainer");

export function visitedCities(cities) {
    visitedBtn.addEventListener ("click", function() {

        let getCityList = localStorage.getItem("cityList");
        console.log(getCityList);
        let totalPopulation = document.createElement ("h3");
        let cityList = document.createElement ("ul");
        siteMain.append (totalPopulation, cityList);

        for (let r = 0; r < cities.length; r++) {
            for (let i = 0; i < getCityList.length; i++) {
                if(getCityList[i] == cities[r].id) {
                    let listCity = document.createElement ("li");
                        listCity.innerText = cities[r].stadname;
                    totalPopulation.innerText += "Invånarantal " + cities[r].population;
                    cityList.append (listCity);
                }
            }
        }
    })
}