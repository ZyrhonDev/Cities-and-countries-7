/*
Tar alla städers ID ifrån localStorage och visar städernas namn samt alla invånarantal ihopräknat. 
*/

// Hämtar "besökta länder" knappen med getElementById samt main på samma sätt.
const visitedBtn = document.getElementById ("visitedBtn");
const siteMain = document.getElementById ("siteMain");

export function visitedCountries() {
    visitedBtn.addEventListener ("click", function() {
        siteMain.innerHTML = "";
        localStorage.getItem("countryList");

        let totalPopulation = document.createElement ("li");
        let countryList = document.createElement ("ul");

        for (i = 0; i < countryList.length; i++) {
            let listCountry = document.createElement ("li");
            listCountry.innerText = countryList[i];
            totalPopulation.innerText += "Invånarantal " + countryList[i].population;
            countryList.append (listCountry);
        }
    })
}