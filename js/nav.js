/* 
Skapa <nav> och appenda till #siteHeader
*/  
 
import { getContries } from './fetch.js';
getContries().then(contries => {
    for (let i = 0; i < contries.length; i++) {
        const newCountry = document.createElement ("ul");
        newCountry.innerText = contries[i].countryname;
        newCountry.id = contries[i].id;
        newCountry.className = "navCountry";
        countryMenu.append (newCountry);
    } 
    
});

// Hämtar, skapar & appendar nav till sidan.
const siteHead = document.getElementById ("siteHeader");
const countryMenu = document.createElement ("nav");
countryMenu.id = "navBar";
siteHead.append (countryMenu);

// Tydligen exporterar den det jag vill här, varför? Ja det är ju frågan.
export function printCountries() {

}