/*
Tar alla städers ID ifrån localStorage och visar städernas namn samt alla invånarantal ihopräknat. 
*/

// Hämtar "besökta länder" knappen med getElementById samt main på samma sätt.


export function visitedCities(cities) {
    visitedBtn.addEventListener ("click", function() {
        console.log("hej")
        siteMain.innerHTML = "";
        
        let getCityList = localStorage.getItem("cityList");

        let totalPopulation = document.createElement ("h3");
        let cityList = document.createElement ("ul");
        siteMain.append (totalPopulation);

        for (let i = 0; i < cities.length; i++) {
            if(getCityList == cities[i].id) {
                let listCity = document.createElement ("li");
                listCity.innerText = cities[i].stadname;
                totalPopulation.innerText += "Invånarantal " + cities[i].population;
                cityList.append (listCity);
            }
        }
    })
}