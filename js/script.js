// ###########################
// ## IMPORTERA MODULES HIT ##
// ###########################
import { renderCountries } from './nav.js';
import { visitedCities } from './visited.js';
import { getCountries, getCities } from './fetch.js';
import { addCityContainer, addCities, toggleCityView } from './clickOnCountry.js';
import { addCityInfoWrapper } from './clickOnCity.js';

// #######################################
// ## Använd funktioner med fetchen här ##
// #######################################
getCountries().then(countries => {
        console.log("länder: ", countries);
        // Använder renderCountries ifrån nav.js, importeras på rad 7. Skickar in countries från fetchen som data att använda.
        renderCountries(countries);   
        addCityContainer(countries); 
});
getCities().then(cities => {
        console.log("städer: ", cities)

        addCities(cities);
        visitedCities(cities)
        toggleCityView(cities)
        addCityInfoWrapper(cities)
});

