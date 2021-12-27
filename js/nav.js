/* 
Skapa <nav> och appenda till #siteHeader
*/ 
const siteHead = document.getElementById ("siteHeader");
const countryMenu = document.createElement ("nav");

countryMenu.innerText = "Hej";

siteHead.append (countryMenu);

