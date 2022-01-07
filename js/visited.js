/*
Tar alla städers ID ifrån localStorage och visar städernas namn samt alla invånarantal ihopräknat. 
*/

// ################################################################################################
// ##     FÖRSÖKTE FÅ DE BESÖKTA LÄNDERNA ATT PRINTAS TILL INFOCONTAINER MEN VERKAR INTE FUNKA   ##
// ##   OM JAG HAR SITEMAIN.INNERHTML = "" FÖR ATT RENSA(GÖRA NY SIDA FÖR BESÖKTA STÄDER VYN)    ##
// ## SÅ FUNKAR INTE MENYKNAPPARNA FÖR DE OLIKA STÄDERNA LÄNGRE, FÖR ATT CONTAINRARNA FÖRSVINNER ##
// ################################################################################################
// let populationContainer = document.getElementById ("populationContainer");
// let weatherContainer = document.getElementById ("weatherContainer");
// let infoContainer = document.getElementById ("infoContainer");
// let picContainer = document.getElementById ("picContainer");
const siteMain = document.getElementById ("siteMain");
export function visitedCities(cities) {
    visitedBtn.addEventListener ("click", function() {
        let visitedContainer = document.createElement("div")
        visitedContainer.id = "visitedContainer"
        siteMain.innerHTML=""
        let getCityList = localStorage.getItem("cityList");
        let getCities = [];
        getCities = JSON.parse(getCityList);

        let totalPopulation = document.createElement ("h3");
        let cityList = document.createElement ("ul");
        let populationAddition = 0;
        let clearCitiesBtn = document.createElement("button")
        clearCitiesBtn.innerText = "Clear"
        clearCitiesBtn.id = "clearCitiesBtn"

        visitedContainer.append (totalPopulation, cityList, clearCitiesBtn);
        siteMain.append(visitedContainer)

        clearCitiesBtn.addEventListener("click", () => {
            localStorage.removeItem("cityList")
            totalPopulation.innerText = "Total Population: ";
            cityList.remove()
        })

for (let i = 0; i < getCities.length; i++) {
    let cityId = getCities[i];
    console.log(getCities[i]);
        for (let r = 0; r < cities.length; r++) {
            let getCityId = cities[r].id;
                if(cityId == getCityId) {
                    let listCity = document.createElement ("li");
                        listCity.textContent = cities[r].stadname;
                    let totalPop = cities[r].population;
                    populationAddition += totalPop;
                    totalPopulation.textContent = "Total Population: " + populationAddition;
                    cityList.append (listCity);
                }
            }
        }
    })
}