// ###########################
// ## IMPORTERA MODULES HIT ##
// ###########################
import { renderCountries } from './nav.js';
import { visitedCountries } from './visited.js';
import { addVisitedCountry } from './addVisited.js';
import { getCountries, getCities } from './fetch.js';

// #######################################
// ## Använd funktioner med fetchen här ##
// #######################################
getCountries().then(countries => {
        console.log("länder: ", countries);
        // Använder renderCountries ifrån nav.js, importeras på rad 4. Skickar in countries från fetchen som data att använda.
        renderCountries(countries);    
});
getCities().then(cities => {
        console.log("städer: ", cities)
        // #########################################################
        // ## EXEMPEL PÅ ATT VISA INVÅNARE PÅ KNAPPTRYCK I MENYN  ##
        // #########################################################
        // navBar.addEventListener ("click", function (evt) {
        //         console.log(evt.target.id);
        //         for (let i = 0; i < cities.length; i++) {
        //                 if (evt.target.id == cities[i].id) {
        //                         mainText.innerHTML = "";
        //                         mainText.innerText = "invånarantal: " + cities[i].population;
        //                 }
        //         }
        // })
});

