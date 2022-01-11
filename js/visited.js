// Tar alla städers ID ifrån localStorage och visar städernas namn samt alla invånarantal ihopräknat. 
const siteMain = document.getElementById ("siteMain");
export function visitedCities(cities) {
    visitedBtn.addEventListener ("click", function() {
        let visitedContainer = document.createElement("div")
        visitedContainer.id = "visitedContainer"
        siteMain.innerHTML=""

        let visitedPageTitle = document.createElement("h2");
            visitedPageTitle.innerText = "Besökta städer";
            visitedPageTitle.id = "visitedPageTitle"

        let getCityList = localStorage.getItem("cityList");
        let getCities = [];
        getCities = JSON.parse(getCityList);

        let totalPopulation = document.createElement ("h3");
        let cityList = document.createElement ("ul");
        let populationAddition = 0;
        let clearCitiesBtn = document.createElement("button")
        clearCitiesBtn.innerText = "Clear"
        clearCitiesBtn.id = "clearCitiesBtn"

        visitedContainer.append (visitedPageTitle, totalPopulation, cityList, clearCitiesBtn);
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