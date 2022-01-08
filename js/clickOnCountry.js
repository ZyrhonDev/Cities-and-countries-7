
//Skapar en UL i varje stad med samma id som landets id i JSON filen
export function addCityContainer(countries) {

    for (var i in countries){
        
        let cityNameContainer = document.createElement("ul")
            cityNameContainer.style.display = "none";
            cityNameContainer.id = countries[i].id                
        let x = countries[i].countryname
        let country = document.getElementById(x)

        if(countries[i].countryname == country.id) {
            document.getElementById(x).append(cityNameContainer)
        }
    }       
}


//Matchar landets ID med countryid och appendar städer baserat på det
export function addCities(cities) {

    for (var j in cities){ 
          
        let cityName = document.createElement("li");    
            cityName.innerText = cities[j].stadname;
            cityName.className = "city";
            cityName.id = cities[j].stadname
        let y = cities[j].countryid;
        let cityContainer = document.getElementById(y)                

        if(cityContainer){
            if(cities[j].countryid == cityContainer.id) {
                document.getElementById(y).append(cityName)            
            } 
        }
    }
}

    
//Togglar listan med städer       
export async function toggleCityView() {

    let listCountries = document.querySelectorAll(".navCountry");

    listCountries.forEach(element => {
        element.addEventListener("click", (e) => {  
            if (e.target.firstElementChild){
                let userChoice = e.target.firstElementChild.id;
                console.log(userChoice)   
                let targetCountry = document.getElementById(userChoice);
                
                if (targetCountry.style.display == "none") {
                    targetCountry.style.display = "block";
                } else {
                    targetCountry.style.display = "none";
                }  

            };                                  
        });
    });
};  
     












