/* 
Skapa <nav> och appenda till #siteHeader
*/ 
const siteHead = document.getElementById ("siteHeader");
const countryMenu = document.createElement ("nav");
countryMenu.innerText = "Hej";

///IN PROGRESS
// let visitedCities = document.createElement("button")
// visitedCities.innerText ="Besökta Städer";

// visitedCities.addEventListener("click", ()=>{

// })
// countryMenu.append(visitedCities);

siteHead.append (countryMenu);

