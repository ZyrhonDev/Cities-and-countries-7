import { wikiApi } from './wikiApi.js';
export async function addCityInfoWrapper(cities) {
    let populationContainer = document.createElement("div");
        populationContainer.id = "populationContainer";
    let weatherContainer = document.createElement("div");
        weatherContainer.id = "weatherContainer";
    let infoContainer = document.createElement("div");
        infoContainer.id = "infoContainer";
    let picContainer = document.createElement("div");
        picContainer.id = "picContainer";

    document.getElementById("siteMain").append(
    populationContainer, weatherContainer, infoContainer, picContainer);    
    
    //Selektar alla ellement med classen city (så alla städer)
    let listItems = document.querySelectorAll(".city");
    // console.log(listItems)

    //Skapar en click event listener till varje selected element
    listItems.forEach(element => {
        element.addEventListener("click", (e) => {        
            // console.log(e.target.textContent);            
            
            //Hämtar text innehållet från det man clickar på
            let userChoice = e.target.textContent;
            let selectedCity = localStorage.setItem("selectedCity", e.target.textContent);
            //Printar population
            for (var i in cities){
                let populationContainer = document.getElementById("populationContainer"); 
                let cityHeading = document.createElement("h2");
                    cityHeading.innerText = cities[i].stadname;
                let populationNumber = document.createElement("p");             
                    populationNumber.innerText = `Population: ${cities[i].population}`;
                let x = cities[i].stadname;
                let city = document.getElementById(x);
                    
                if (userChoice === city.id){
                    populationContainer.innerHTML=""; 
                    populationContainer.append(populationNumber);
                    infoContainer.innerHTML=""; 
                    infoContainer.prepend(cityHeading);
                };                
            };

            //Wiki API
            fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + userChoice)
            .then((response) => response.json())
            .then((data) => wikiApi(data));
            

            //Väder API

        })
    })
};
