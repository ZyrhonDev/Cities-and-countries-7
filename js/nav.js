/* 
Skapa <nav> och appenda till #siteHeader
*/  

// Hämtar, skapar & appendar nav till sidan.
const siteHead = document.getElementById ("siteHeader");
const countryMenu = document.createElement ("nav");
const visitedBtn = document.createElement("button")
visitedBtn.textContent = "Besökta städer"
visitedBtn.id = "visitedBtn"
countryMenu.id = "navBar";
siteHead.append (countryMenu);
countryMenu.append (visitedBtn);


/* 
    Skapa lista från API och rendera i nav
*/

export function renderCountries(countries) {
    let countryList = document.createElement("ul")

    countries.forEach((country) =>  {
        let countryItem = document.createElement("li")
        countryItem.className = "navCountry";
        countryItem.id = country.countryname
        countryItem.innerText = country.countryname
        countryList.append(countryItem)
    })
    countryMenu.append(countryList)
}
