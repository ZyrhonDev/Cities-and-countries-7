// import {getContries, getCitys} from './fetch.js';

//=================================================================================
//=====OBS! Alla setTiemout borde ändras till await eller annan bättre lösning=====
//=================================================================================


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


export function addCities(cities) {

    for (var j in cities){ 
          
        let cityName = document.createElement("li");    
            cityName.innerText = cities[j].stadname;
            cityName.className = "city";
        let y = cities[j].countryid;
        let country = document.getElementById(y)                

        if(cities[j].countryid == country.id) {
            document.getElementById(y).append(cityName)  
            country.append(cityName) 
        } 
    }

}

    
       
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
     












